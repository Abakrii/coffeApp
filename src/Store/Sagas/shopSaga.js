import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
//import types from "../Types/coffee";
import {GET_REQUEST_PENDING, GET_REQUEST_SUCCEEDED , GET_REQUEST_FAILED, GET_REQUEST_PLACE} from '../Actions/actionTypes'
import * as Api from "../Services/Api";

export function* getPlaces() {
  try {
    yield put({ type: GET_REQUEST_PENDING });
    const json = yield call(Api.getPlaces);
    console.log("json" , json)
   
    yield put({ type: GET_REQUEST_SUCCEEDED, places: json.businesses });
  } catch (e) {
    yield put({ type: GET_REQUEST_FAILED, message: e.message });
  }
}


export function* watchFetchMovies() {
    yield takeEvery(GET_REQUEST_PLACE, getPlaces);
  }
  
