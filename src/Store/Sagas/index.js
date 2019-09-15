import {watchFetchPlaces} from './shopSaga';
import {watchFetchReview} from './reviewSaga';

import {takeEvery, fork, call,takeLatest , all} from 'redux-saga/effects';





export default function* rootSaga() {
    yield all([
        watchFetchPlaces(),
        watchFetchReview(),
      ])
}

//console.log(rootSaga());


// export default function* rootSaga() {
//     yield all([
//       takeEvery("FRIEND_FETCH_REQUESTED", watchFetchPlaces),
//       takeEvery("CREATE_USER_REQUESTED", watchFetchReview)
//     ]);
//   }