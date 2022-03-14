import {SET_USERS} from './types';

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case SET_USERS:
      return {...state, users: action.payload};
      break;
    default:
      break;
  }

  return state;
};

export default reducer;
