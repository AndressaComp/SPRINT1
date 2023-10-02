export const testConfig = {
    environment: {
        hml: {
            url: "http://localhost:3000"
        }
    },
    
    options: {
        smokeThresholds: {
            vus: 1,
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            }
        },

        vinteUsuarios1Minuto: {
            vus: 20,
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                {duration: '10s', target: 10},
                {duration: '10s', target: 10}
            ]
        },

        volumetria100: {
            vus: 100,
            thresholds: {
                http_req_duration: ['p(95)<200'],
                http_req_failed: ['rate<0.01']
            }
        },

        volumetria50: {
            vus: 50,
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            }
        },

        volumetria30: {
            vus: 30,
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            }
        },

        metrica400: {
            thresholds: {
                http_req_duration: ['p(95)<400'],
                http_req_failed: ['rate<0.01']
            }
        },

        metrica300: {
            thresholds: {
                http_req_duration: ['p(95)<300'],
                http_req_failed: ['rate<0.01']
            }
        },

        metrica200: {
            thresholds: {
                http_req_duration: ['p(95)<200'],
                http_req_failed: ['rate<0.01']
            }
        },

        metrica100: {
            thresholds: {
                http_req_duration: ['p(95)<100'],
                http_req_failed: ['rate<0.01']
            }
        },

        metrica50: {
            thresholds: {
                http_req_duration: ['p(95)<50'],
                http_req_failed: ['rate<0.01']
            }
        }
    }
}
