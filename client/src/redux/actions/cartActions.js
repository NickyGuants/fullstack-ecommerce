import axios from 'axios'
import { ADD_ITEM, REMOVE_ITEM, INCREMENT_ITEM, DECREMENT_ITEM } from "../types";

export const addItem = (id) => async (dispatch) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: ADD_ITEM,
        payload: data,
    }) 
};


export const removeItem = (id) => async (dispatch) =>{
    dispatch( {
        type: REMOVE_ITEM,
        payload: id,
    });
};

export const incrementItem = (id) => async (dispatch) => {
    dispatch ({
        type: INCREMENT_ITEM,
        payload: id
    });
};

export const decrementItem = (id) => async (dispatch) => {
    dispatch ({
        type: DECREMENT_ITEM,
        payload: id
    });
};