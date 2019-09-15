//import types from "../Types/coffee";
import {GET_REQUEST_PENDING  , GET_REQUEST_REVIEW_SUCCEEDED} from '../Actions/actionTypes';
const initialState = {

  reviews: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST_PENDING:
      return { ...state};

    case GET_REQUEST_REVIEW_SUCCEEDED:
      return { ...state, reviews: action.reviews};
   

    default:
      return state;
  }
};
