//import coffeeTypes from "../Types/coffee";
import {GET_REQUEST_PLACE} from '../Actions/actionTypes'
//import galleryTypes from "../Types/gallery";
import {watchFetchMovies} from "./shopSaga";
//import * as gallerySagas from "../Sagas/gallery";
import { takeEvery, fork } from "redux-saga/effects";

// export default function* rootSaga() {
//   yield [
//     takeEvery({type: GET_REQUEST_PLACE, getPlaces}),
//     // takeEvery(
//     //   galleryTypes.IMAGES_FETCH_REQUESTED,
//     //   gallerySagas.fetchImagesForGallery
//     // )
//   ];
// }


export default function* rootSaga() {
    yield fork(watchFetchMovies)
   
 }
 