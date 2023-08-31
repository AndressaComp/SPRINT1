import http from 'k6/http';
import { Trend, Rate, Counter } from 'k6/metrics';
import { sleep } from 'k6';
import { check, fail } from 'k6';

export let GetDuration = new Trend('get_duration');
export let GetFailRate = new Trend('get_f_r');
export let GetSuccessRate = new Trend('get_s_r');
export let GetReqs = new Trend('get_reqs');

export default function(){
    let res = http.get('http://localhost:3000/usuarios');

    GetDuration.add(res.timings.duration);
    GetReqs.add(1);
    GetSuccessRate.add(res.status < 399);

    let durationMsg = 'Max duration ${1000/1000}s'
  if(!check(res, {
    'max duration': (r) => r.timings.duration < 1000,
  })){
    fail(durationMsg);
  }
}
sleep(1);