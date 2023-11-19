import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from '../reducers';
import { loginReducer } from '../containers/Login';
import rootSaga from '../sagas';


// function configureStore(initialState = {}) {
//     const sagaMiddleware = createSagaMiddleware();
//     const middleWares = [sagaMiddleware]
//     const store = createStore(rootReducers, fromJS(initialState), composeWithDevTools(applyMiddleware(...middleWares)));
//     sagaMiddleware.run(rootSaga);
//     return store;
// }

export const store = configureStore({
    reducer: {
        login: loginReducer,
    }
})

export default store;