import { combineReducers } from 'redux-immutable';
import { loginReducer } from '../containers/Login';

const rootReducers = combineReducers({
  login: loginReducer,
});

export default rootReducers;
