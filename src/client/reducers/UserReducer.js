import {
  GET_CURRENT_USER,
  SET_CURRENT_USER,
  SET_USERS,
  LOGOUT,
} from '../constants';

let currentUser = null;
let users = [];

const UserReducer = (state = { currentUser, users }, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser,
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users,
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
