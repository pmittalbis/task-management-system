import {
  GET_CURRENT_USER,
  SET_CURRENT_USER,
  SET_USERS,
  SAVE_TASKS,
  LOGOUT,
} from '../constants';

let currentUser = null;
let users = [];
let tasks = [];

const UserReducer = (state = { currentUser, users, tasks }, action) => {
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
    case SAVE_TASKS:
    debugger
      return {
        ...state,
        tasks: action.tasks,
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
