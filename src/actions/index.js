import axios from 'axios';

import { items } from '../items';

const ROOT_URL = `http://api.fixer.io/`;

export const FETCH_CURRENCY_M0 = 'FETCH_CURRENCY_M0';
export const FETCH_CURRENCY_M1 = 'FETCH_CURRENCY_M1';
export const FETCH_CURRENCY_M2 = 'FETCH_CURRENCY_M2';
export const FETCH_CURRENCY_M3 = 'FETCH_CURRENCY_M3';
export const FETCH_CURRENCY_M4 = 'FETCH_CURRENCY_M4';
export const FETCH_CURRENCY_M5 = 'FETCH_CURRENCY_M5';
export const FETCH_CURRENCY_M6 = 'FETCH_CURRENCY_M6';
export const CURRENCY_ITEMS = 'CURRENCY_ITEMS';

export function fetchItems() {
    return {
        type: CURRENCY_ITEMS,
        payload: items
    };
}

export function fetchCurrencyM0(currency, day) {

    const request = axios.get(`${ROOT_URL}${day}?base=${currency}`);

    return {
        type: FETCH_CURRENCY_M0,
        payload: request
    };
}

export function fetchCurrencyM1(currency, day) {

    const request = axios.get(`${ROOT_URL}${day}?base=${currency}`);

    return {
        type: FETCH_CURRENCY_M1,
        payload: request
    };
}
export function fetchCurrencyM2(currency, day) {

    const request = axios.get(`${ROOT_URL}${day}?base=${currency}`);

    return {
        type: FETCH_CURRENCY_M2,
        payload: request
    };
}

export function fetchCurrencyM3(currency, day) {

    const request = axios.get(`${ROOT_URL}${day}?base=${currency}`);

    return {
        type: FETCH_CURRENCY_M3,
        payload: request
    };
}
export function fetchCurrencyM4(currency, day) {

    const request = axios.get(`${ROOT_URL}${day}?base=${currency}`);

    return {
        type: FETCH_CURRENCY_M4,
        payload: request
    };
}

export function fetchCurrencyM5(currency, day) {

    const request = axios.get(`${ROOT_URL}${day}?base=${currency}`);

    return {
        type: FETCH_CURRENCY_M5,
        payload: request
    };
}
export function fetchCurrencyM6(currency, day) {

    const request = axios.get(`${ROOT_URL}${day}?base=${currency}`);

    return {
        type: FETCH_CURRENCY_M6,
        payload: request
    };
}