import { createStore, applyMiddleware } from "redux";
import { logger } from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducers";
import rootSaga from "./Sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware , logger));

sagaMiddleware.run(rootSaga);

export default store;
