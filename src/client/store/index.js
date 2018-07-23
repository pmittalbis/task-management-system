import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from '../reducers';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export default store;
