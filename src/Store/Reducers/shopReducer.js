//import types from "../Types/coffee";
import {
  GET_REQUEST_PENDING,
  GET_REQUEST_PLACE_SUCCEEDED,
  SCREEN_CHANGED,
} from '../Actions/actionTypes';
const initialState = {
  isLoading: true,
  isListMode: true,
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST_PENDING:
      return {...state, isLoading: true};

    case GET_REQUEST_PLACE_SUCCEEDED:
      return {...state, places: action.places, isLoading: false};

    case SCREEN_CHANGED:
      return {...state, isListMode: !state.isListMode};

    default:
      return state;
  }
};
