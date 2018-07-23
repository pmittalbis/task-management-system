import {
  GET_CURRENT_USER,
  SET_USERS,
  SET_CURRENT_USER,
  SAVE_TASKS,
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

export function saveTasks(tasks) {
  return {
    type: SAVE_TASKS,
    tasks,
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
