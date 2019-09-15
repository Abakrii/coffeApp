
import {GET_REQUEST_PLACE , SCREEN_CHANGED , GET_REQUEST_REVIEW} from './actionTypes';




export const getPlaces = () =>{
    return{
        type: GET_REQUEST_PLACE
    }
}


export const changeTheScreen = () => {
    return {
        type: SCREEN_CHANGED
    }
}


export const getReview = () => {
    return {
        type: GET_REQUEST_REVIEW
    }
}
