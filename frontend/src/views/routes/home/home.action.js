import axios from 'axios';
import {FETCH_HOTELS, FETCH_HOTELS_FAIL, SORT_BY_PRICE} from "./home.actionTypes";


export const fetchHotels = ({search = ''}) => dispatch => {
    return axios.get(
        `${process.env.REACT_APP_API_SERVER}hotels?search=${search}`,
        {
            headers: {
                "Content-Type": 'application/json'
            }
        }
    ).then(response => {
            dispatch({
                type: FETCH_HOTELS,
                payload: response.data
            });
        },
        error => {
            dispatch({type: FETCH_HOTELS_FAIL});
        }
    );
};
export const sortHotelByPrice = () => dispatch => {
    dispatch({type: SORT_BY_PRICE})
};