import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 10 },
    { duration: '3m', target: 10 },
    { duration: '1m', target: 0 }  
  ],
};

export default function () {
  let payload = JSON.stringify({
    email: 'fulano@qa.com',
    password: 'teste'
  });

  let params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

    let response = http.post('http://localhost:3000/login', payload, params);

    check(response, {
    'is status 200': (r) => r.status === 200,
    });

  sleep(1);
}