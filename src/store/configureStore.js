import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/user';

const reducer = combineReducers({
  user: userReducer,
});

const store = createStore(reducer);

export default store;
