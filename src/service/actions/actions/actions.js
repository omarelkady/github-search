import {ADD_TO_FAVOURITES} from '../constants'
export const addToFavourites =(data)=>{
    // console.warn("action",data)
    return {
        type:ADD_TO_FAVOURITES,
        data:data
    }
}