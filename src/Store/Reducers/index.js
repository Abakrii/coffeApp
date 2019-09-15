import shop from "./shopReducer";
import reviewsState from './reviewReducer';
import { combineReducers } from "redux";

export default combineReducers({
    shop,
    reviewsState
});
