import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { check, fail } from 'k6';

export let GetUsuariosDuration = new Trend('get_usuarios_duration'); // Tempo de ms da requisição
export let GetUsuariosFailRate = new Rate('get_usuarios_fail_rate'); // Porcetagem da falha do teste
export let GetUsuariosSuccessRate = new Rate('get_usuarios_success_rate'); // Porcentagem de sucesso
export let GetUsuariosReqs = new Rate('get_usuarios_reqs'); // Porcentagem de requisição

export default function () {
  let res = http.get('http://localhost:3000/usuarios');
  
  GetUsuariosDuration.add(res.timings.duration);
  GetUsuariosReqs.add(1);
  GetUsuariosFailRate.add(res.status == 0 || res.status > 399);
  GetUsuariosSuccessRate.add(res.status < 399);

  let durationMsg = 'Max duration ${1000/1000}s'
  if(!check(res, {
    'max duration': (r) => r.timings.duration < 1000,
  })){
    fail(durationMsg);
  }
}
sleep(1);
