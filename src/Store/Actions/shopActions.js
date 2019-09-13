
import {GET_REQUEST_PLACE , SCREEN_CHANGED} from './actionTypes';




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
