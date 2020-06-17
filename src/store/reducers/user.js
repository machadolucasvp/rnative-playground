import {LOAD_USER, UPDATE_AGE, UPDATE_NAME} from '../actions/user';

const initialClientState = {name: 'Lucas'};

export default (state = initialClientState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {...state, ...action.payload};
    case UPDATE_AGE:
      return {...state, age: action.payload.age};
    case UPDATE_NAME:
      return {...state, name: action.payload.name};
    default:
      return state;
  }
};
