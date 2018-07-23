import {
  ASSIGN_TASK,
  GET_CURRENT_USER,
  GET_TASKS,
  GET_USERS,
  SET_TASKS,
  SET_USERS,
  SET_CURRENT_USER,
  LOGIN,
  LOGOUT,
  SIGNUP,
} from '../constants';

export function getCurrentUser() {
  return {
    type: GET_CURRENT_USER,
  };
}

export function assignTask(task) {
  return {
    type: ASSIGN_TASK,
    task,
  };
}

export function getTasks(userId) {
  return {
    type: GET_TASKS,
    userId,
  };
}

export function getUsers() {
  return {
    type: GET_USERS,
  };
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}

export function signup(signupDetails, thisContext) {
  return {
    type: SIGNUP,
    signupDetails,
    thisContext,
  };
}

export function login(email, password, thisContext) {
  return {
    type: LOGIN,
    email,
    password,
    thisContext,
  };
}

export function setTasks(tasks) {
  return {
    type: SET_TASKS,
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
