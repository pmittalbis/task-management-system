import { ASSIGN_TASK,
  GET_AUTH_USER,
  GET_CURRENT_USER,
  GET_TASKS,
  GET_USERS,
  LOGIN,
  LOGOUT,
  SET_AUTH_USER,
  SET_CURRENT_USER,
  SET_TASKS,
  SET_USERS,
  SIGNUP,
  UPDATE_PROFILE, } from '../constants';

  export function assignTask(task) {
    return {
      type: ASSIGN_TASK,
      task,
    };
  }

export function getAuthUser() {
  return {
    type: GET_AUTH_USER,
  };
}

export function getCurrentUser() {
  return {
    type: GET_CURRENT_USER,
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

export function login(email, password, thisContext) {
  return {
    type: LOGIN,
    email,
    password,
    thisContext,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function setAuthUser(user) {
  return {
    type: SET_AUTH_USER,
    user,
  };
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function setTasks(tasks) {
  return {
    type: SET_TASKS,
    tasks,
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

export function updateProfile(formData, userId) {
  return {
    type: UPDATE_PROFILE,
    formData,
    userId,
  };
}
