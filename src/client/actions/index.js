import {
  GET_CURRENT_USER,
  SET_USERS,
  SET_CURRENT_USER,
  LOGOUT
} from '../constants';

export function getCurrentUser() {
  return {
    type: GET_CURRENT_USER,
  };
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
