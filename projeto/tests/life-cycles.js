import { sleep } from 'k6';
// 1. init code
// (Inicializa variaveis, define options (VUS, duration, tresholds))
let counter = 1

export function setup() {
    // 2. setup code (Executa apenas 1 vez antes da função principal)
    console.log(`SETUP ${counter}`)
}

export default function() {
    // 3. VU code (Ponto de entrada das VU's, onde realizam os testes/chamadas na API)
    console.log(`FUNÇÃO PRINCIPAL - ${counter} VU=${__VU} ITER=${__ITER}`)
    counter = counter + 1
    sleep(1)
}

export function teardown(data) {
    // 4. teardown code (Executa apenas 1 vez após a execução da função principal)
    console.log(`TEARDOWN - ${counter}`)
}