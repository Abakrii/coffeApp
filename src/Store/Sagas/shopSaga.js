import {put, takeEvery} from 'redux-saga/effects';

import {
  GET_REQUEST_PENDING,
  GET_REQUEST_PLACE_SUCCEEDED,
  GET_REQUEST_FAILED,
  GET_REQUEST_PLACE,
} from '../Actions/actionTypes';

import search from '../Services/venue-search.json';
export function* getPlaces() {
  try {
    yield put({type: GET_REQUEST_PENDING});

    yield put({type: GET_REQUEST_PLACE_SUCCEEDED, places: search.businesses});
  } catch (e) {
    yield put({type: GET_REQUEST_FAILED, message: e.message});
  }
}
export function* watchFetchPlaces() {
  yield takeEvery(GET_REQUEST_PLACE, getPlaces);
}
