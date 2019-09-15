import {put,takeEvery} from 'redux-saga/effects';

import {
  GET_REQUEST_PENDING,
  GET_REQUEST_FAILED,
  GET_REQUEST_REVIEW,
  GET_REQUEST_REVIEW_SUCCEEDED

} from '../Actions/actionTypes';

import review from '../Services/venue-reviews.json';

export function* getReview() {
  try {
  
    yield put({type: GET_REQUEST_PENDING});

    yield put({type:GET_REQUEST_REVIEW_SUCCEEDED, reviews: review.reviews});
    
  } catch (e) {
    yield put({type: GET_REQUEST_FAILED, message: e.message});
  }
}

export function* watchFetchReview() {
  yield takeEvery(GET_REQUEST_REVIEW, getReview);
}
