import { takeLatest } from 'redux-saga/effects';

export function* getTodo() {
    try {

    } catch {

    }
}

const loginSagas = [
    takeLatest(`GET_TODO`, getTodo),
]

export default loginSagas;