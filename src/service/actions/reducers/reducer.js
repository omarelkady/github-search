import { ADD_TO_FAVOURITES } from '../constants'

const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
        default:
            return state
    }


}

