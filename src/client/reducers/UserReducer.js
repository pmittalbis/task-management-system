import {
  GET_CURRENT_USER,
  SET_CURRENT_USER,
  LOGOUT,
} from '../constants';

let currentUser = null;

const UserReducer = (state = { currentUser }, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      }
    case LOGOUT:
      return {
        ...state,
        currentUser: null,
      }
    default:
      return {
        ...state
      }
  }
}

export default UserReducer;
