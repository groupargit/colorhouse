import {combineReducers} from 'redux';
import {errorReducer} from '../reducers/ErrorReducer';
import {statusReducer} from '../reducers/StatusReducer';
import {userReducer} from '../reducers/UserReducer';

const rootReducer = combineReducers({
  errorReducer,
  statusReducer,
  userReducer,
});

export default rootReducer;
