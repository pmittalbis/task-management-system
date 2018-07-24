import { all, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  ASSIGN_TASK,
  LOGIN,
  GET_USERS,
  GET_AUTH_USER,
  SET_AUTH_USER,
  GET_TASKS,
  SET_TASKS,
  SET_USERS,
  SIGNUP,
} from '../constants';

function notify(msg) {
  toast(msg);
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
       return false;
     }
   })
   .catch((err) => { console.log(err) });
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
       this.setState({
         message: response.data,
       });
     }
   })
   .catch((err) => { console.log(err) });
}

export function* takeGetUsers() {
  yield takeEvery(GET_USERS, getUsers);
}

function* getUsers(action) {
  const users = yield axios.get('http://localhost:4000/GetUsers')
   .then((response) => {
     return response.data
   })
   .catch((err) => { console.log(err) });
   if (users) {
     yield put({ type: SET_USERS, users });
   }
}

export function* takeGetTasks() {
  yield takeEvery(GET_TASKS, getTasks);
}

function* getTasks(action) {
  const tasks = yield axios.get(`http://localhost:4000/GetTasks/${action.userId}`)
   .then((response) => {
     return response.data
   })
   .catch((err) => { console.log(err) });
   if (tasks) {
     yield put({ type: SET_TASKS, tasks });
   }
}

export function* takeAssignTask() {
  yield takeEvery(ASSIGN_TASK, assignTask);
}

function* assignTask(action) {
  yield axios.post('http://localhost:4000/AssignTask', action.task)
   .then((res) => {
     notify("Tasked assigned successfully.")
     return res.data
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

export default function* rootSaga() {
  yield all([
    takeSignup(),
    takeLogin(),
    takeGetUsers(),
    takeGetTasks(),
    takeAssignTask(),
    takeGetAuthUser(),
  ]);
}
