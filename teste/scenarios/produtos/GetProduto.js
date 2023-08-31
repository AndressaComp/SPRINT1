import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { check, fail } from 'k6';

export let GetDuration = new Trend('get_duration'); 
export let GetFailRate = new Rate('get_fail_rate');
export let GetSuccessRate = new Rate('get_success_rate');
export let GetReqs = new Rate('get_reqs'); 

export default function () {
  let res = http.get('http://localhost:3000/produtos');
  
  GetDuration.add(res.timings.duration);
  GetReqs.add(1);
  GetFailRate.add(res.status == 0 || res.status > 399);
  GetSuccessRate.add(res.status < 399);

  let durationMsg = 'Max duration ${1000/1000}s'
  if(!check(res, {
    'max duration': (r) => r.timings.duration < 1000,
  })){
    fail(durationMsg);
  }
}
sleep(1);
