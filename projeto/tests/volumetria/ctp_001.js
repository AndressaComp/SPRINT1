import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';

export const options = testConfig.options.volumetria100;

// Criando as variaveis base
const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Movies', function () {
    const jsonData = JSON.parse(open('../data/static/movie.json'));
    return jsonData.movies;
});

const payload = {
  "title": "Vingadores",
  "description": "Super herois.",
  "launchdate": "2023-09-24",
  "showtimes": [
    "inicio: 22:00"
  ]
}






