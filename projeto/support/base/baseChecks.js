import { check } from "k6";

export class BaseChecks {
    checkStatusCode(response, expectedStatus = 200) {
        check(response, {
            'Status code check' : (r) => r.status === expectedStatus,
        })
    }
}