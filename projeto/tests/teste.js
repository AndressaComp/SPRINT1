import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';

export const options = testConfig.options.smokeThresholds;

// Criando as variaveis base
const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Users', function () {
    const jsonData = JSON.parse(open('../data/static/user.json'));
    return jsonData.users;
});

const payload = {
    "nome": "Fulano da Silva",
    "email": "fulano5@qa.com",
    "password": "teste",
    "administrador": "true"
}

export function setup() {
    const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload)
    console.log(res.json())

    baseChecks.checkStatusCode(res, 201)

    console.log('SETUP CRIANDO USER')
    return { responseData : res.json() }
}

export default () => {
    let userIndex = __ITER % data.length;
    let user = data[userIndex];

    const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, user);
    
    baseChecks.checkStatusCode(urlRes, 200)

    console.log('REALIZANDO LOGIN')
    sleep(1);
}

export function teardown(responseData) {
    const userId = responseData.responseData._id
    //const res = http.del(`http://localhost:3000/usuarios/${userId}`)
    const res = baseRest.delete(ENDPOINTS.USER_ENDPOINT + `/${userId}`)
    baseChecks.checkStatusCode(res, 200)
    console.log(`Teardown deletando o usuario com ID ${userId}`)
}
