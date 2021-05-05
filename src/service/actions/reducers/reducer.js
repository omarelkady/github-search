import { ADD_TO_FAVOURITES } from '../constants'

const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return [
                ...state,
                {cardData: action.data}
            ]
        default:
            return state
    }


}

