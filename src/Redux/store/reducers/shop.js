import {FAKE_FETCH_DATA, SORT_BY_TYPE, FILTER_BY_PRICE } from "../action/type.js";
const initialState = {
    allProducts: [],
    filterProducts: [],
    sort: "",
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAKE_FETCH_DATA:
            return {
                ...state,
                filterProducts: action.data,
                allProducts: action.data
            }
        case SORT_BY_TYPE:
            return {
                ...state,
                filterProducts: action.item,
                sort: action.typeSort
            }
        case FILTER_BY_PRICE:
            return {
                ...state,
                filterProducts: action.item,
            }
        default: return state;
    }
}

export default shopReducer