import { all, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ASSIGN_TASK,
  GET_AUTH_USER,
  GET_TASKS,
  GET_USERS,
  LOGIN,
  LOGOUT,
  NOTIFY_USER,
  SET_AUTH_USER,
  SET_CURRENT_USER,
  SET_TASKS,
  SET_USERS,
  SIGNUP,
  UPDATE_PROFILE,
  UPDATE_TASK, } from '../constants';

function notify(msg) {
  toast(msg);
}

export function* takeAssignTask() {
  yield takeEvery(ASSIGN_TASK, assignTask);
}

function* assignTask(action) {
  yield axios.post('http://localhost:4000/AssignTask', action.task)
   .then((res) => {
     if (typeof res.data === "object") {
       notify("Task assigned successfully.")
       return res.data
     } else {
       notify(res.data);
     }
   })
   .catch((err) => { console.log(err) });
}

export function* takeGetAuthUser() {
  yield takeEvery(GET_AUTH_USER, getAuthUser);
}

function* getAuthUser(action) {
  const user = yield axios.get('http://localhost:4000/AuthUser')
   .then((res) => {
     if (typeof res === "object") {
       return res.data
     } else {
       this.notify("You must login first!")
     }
   })
   .catch((err) => { console.log(err); });
   yield put({ type:SET_AUTH_USER, user })
}

export function* takeGetTasks() {
  yield takeEvery(GET_TASKS, getTasks);
}

function* getTasks(action) {
  const tasks = yield axios.get(`http://localhost:4000/GetTasks/${action.userId}`)
   .then((response) => {
     if (typeof response.data === "object") {
       return response.data
     } else {
       notify(response.data);
     }
   })
   .catch((err) => { console.log(err) });
   if (tasks) {
     yield put({ type: SET_TASKS, tasks });
   }
}

export function* takeGetUsers() {
  yield takeEvery(GET_USERS, getUsers);
}

function* getUsers(action) {
  const users = yield axios.get('http://localhost:4000/GetUsers')
   .then((response) => {
     if (typeof response.data === "object") {
       return response.data
     } else {
       notify(response.data);
     }
   })
   .catch((err) => { console.log(err) });
   if (users) {
     yield put({ type: SET_USERS, users });
   }
}

export function* takeLogin() {
  yield takeEvery(LOGIN, loginUser);
}

function* loginUser(action) {
  yield axios.post('http://localhost:4000/Login', {
    email: action.email,
    password: action.password,
  })
   .then((response) => {
     if (typeof response.data === "object") {
       notify("Welcome " + response.data.name);
       setTimeout(() => { action.thisContext.props.history.push("/Dashboard") }, 2000)
       return response.data
     } else {
       notify(response.data);
     }
   })
   .catch((err) => { console.log(err) });
}

export function* takeLogout() {
  yield takeEvery(LOGOUT, logoutUser);
}

function* logoutUser(action) {
  yield axios.get('http://localhost:4000/Logout')
   .catch((err) => { console.log(err) });
}

export function* takeNotifyUser() {
  yield takeEvery(NOTIFY_USER, notifyUser);
}

function* notifyUser(action) {
  yield axios.post(`http://localhost:4000/NotifyUser/${action.userId}`, {notification: action.notification})
   .catch((err) => { console.log(err) });
}

export function* takeSignup() {
  yield takeEvery(SIGNUP, signupUser);
}

function* signupUser(action) {
  yield axios.post('http://localhost:4000/Signup', action.signupDetails)
   .then((response) => {
     if (typeof response.data === "object") {
       notify("You have successfully signed up.");
       setTimeout(() => { action.thisContext.props.history.push("/") }, 2000)
       return response.data
     } else {
       notify(response.data);
     }
   })
   .catch((err) => { console.log(err) });
}

export function* takeUpdateProfile() {
  yield takeEvery(UPDATE_PROFILE, updateProfile);
}

function* updateProfile(action) {
  const updatedUser = yield axios.put(`http://localhost:4000/UploadProfile/${action.userId}`, action.formData)
   .then((res) => {
     if (typeof res.data === "object") {
       notify("Profile pic updated.")
       return res.data
     } else {
       notify(res.data)
     }
   })
   .catch((err) => { console.log(err) });
   if (updatedUser) {
     yield put({ type: SET_CURRENT_USER, user: updatedUser });
   }
}

export function* takeUpdateTask() {
  yield takeEvery(UPDATE_TASK, updateTask);
}

function* updateTask(action) {
  const updatedTask = yield axios.put(`http://localhost:4000/UpdateTask/${action.taskId}`, {updatedStatus: action.updatedStatus})
   .then((res) => {
     if (typeof res.data === "object") {
       return res.data
     }
   })
   .catch((err) => { console.log(err) });
   if (updatedTask) {
     yield put({ type: GET_TASKS, userId: action.userId });
   }
}

export default function* rootSaga() {
  yield all([
    takeAssignTask(),
    takeGetAuthUser(),
    takeGetTasks(),
    takeGetUsers(),
    takeLogin(),
    takeLogout(),
    takeNotifyUser(),
    takeSignup(),
    takeUpdateProfile(),
    takeUpdateTask(),
  ]);
}
