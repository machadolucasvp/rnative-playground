export const LOAD_USER = 'USER/LOAD_USER';
export const UPDATE_NAME = 'USER/UPDATE_NAME';
export const UPDATE_AGE = 'USER/UPDATE_AGE';

export const loadUser = (user) => {
  return {type: LOAD_USER, payload: {...user}};
};

export const updateName = (name) => {
  return {type: UPDATE_NAME, payload: {name: name}};
};

export const updateAge = (age) => {
  return {type: UPDATE_AGE, payload: {age: age}};
};
