import { all } from 'redux-saga/effects';

import { loginSagas } from '../containers/Login';

export default function* rootSaga() {
    yield all ([
        ...loginSagas,
    ])
}