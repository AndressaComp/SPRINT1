import GetUsuarios from "./scenarios/usuarios/Get-Usuarios.js";
import { group, sleep } from "k6";
import GetIdUsuarios from "./scenarios/usuarios/Get-id-Usuarios.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data){
    return {
        "summary.html": htmlReport(data),
    }
}

export const options = {
    scenarios: {
        usuarios: {
            executor: 'constant-vus', // Número fixo de vus que executar interações por um período específico
            exec: 'usuarios',
            vus: 1,
            duration: '20s'
        },
        usuariosId: {
            executor: 'per-vu-iterations', // Cada vu executa um número exato de interações
            exec: 'usuariosId',
            vus: 1,
            iterations: 2,
            startTime: '20s',
            maxDuration: '30s',
        },
    },
}

export function usuarios(){
group('Endpoint Get Usuarios - Controller Usuarios - ServRest.Api', () => {
    GetUsuarios();
});
}

export function usuariosId(){
group('Endpoint Get Id Usuarios - Controller Usuarios - ServRest.Api', () => {
    GetIdUsuarios();
});
}

/*export const options = {
    stages: [
        {duration: '5s', target: 100},
        {duration: '5s', target: 50},
    ],
}

export default () => {
    group('Endpoint Get Usuarios - Controller Usuarios - ServRest.Api', () => {
        GetUsuarios();
    });

    group('Endpoint Get Id Usuarios - Controller Usuarios - ServRest.Api', () => {
        GetIdUsuarios();
    });
}
*/

