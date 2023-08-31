import http from "k6/http";
import { sleep } from "k6";
import { check, fail } from "k6";

export default function () {
    let res = http.get('http://localhost:3000/usuarios/0uxuPY0cbmQhpEz1')

    let durationMsg = 'Falha na execução do cenário de teste GetUsuariosId'

    if(!check(res, {
        'is statuscode 200 - GetUsuarios': (r) => r.status === 200,
        'max duration - GetUsuarios': (r) => r.timings.duration < 1000,
    })){
        fail(durationMsg);
    }
}
sleep(1);