import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_LIST_DATA } from './constant';
const initialState = [];

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]

        case REMOVE_FROM_CART:
            const result = state.filter(item => item.id !== action.data);
            return [
                ...result
            ]
        case SET_USER_LIST_DATA:
            return [
                action.data
            ]

        default:
            return state
    }
}