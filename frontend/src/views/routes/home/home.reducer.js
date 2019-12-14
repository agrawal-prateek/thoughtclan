import {
    FETCH_HOTELS,
    FETCH_HOTELS_FAIL,
    SORT_BY_PRICE
} from "./home.actionTypes";

const initialState = {
    hotels: [],
    error: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SORT_BY_PRICE:
            const hotelsCopy = state.hotels.slice(0);
            hotelsCopy.sort((a, b) => a.price - b.price);
            return {...state, hotels: hotelsCopy};
        case FETCH_HOTELS:
            return {
                ...state,
                hotels: action.payload
            };
        case FETCH_HOTELS_FAIL:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}
