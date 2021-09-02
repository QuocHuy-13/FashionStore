import {cart} from '../../static/cart';
import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, 
        CONFIRM_ORDER_SUCCESS, HANDLE_CHANGE_QUANTITY,CHANGE_TYPE_ORDER_SUCCESS} from '../action/type';

const initialState = cart;

const cartReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TO_CART:
            if(state.cartTotal===0){
                state.cart.push(action.product);
            }
            else{
                let check = false;
                state.cart.map((item,key) => {
                    if(item["item"].id === action.product["item"].id && item.size === action.product.size){
                        state.cart[key].quantity = state.cart[key].quantity + action.product.quantity;
                        check = true;
                    }
                });
                if(!check){
                    state.cart.push(action.product);
                }
            }
            state.cartTotal = state.cartTotal + action.product.quantity;
            localStorage.setItem('CART', JSON.stringify(state.cart));
            localStorage.setItem('CARTTOTAL', JSON.stringify(state.cartTotal));
            return {
                ...state
            }
        case HANDLE_CHANGE_QUANTITY :
            if(state.cart[action.index].quantity < 2 && action.value === -1) {
               return {
                   ...state
               };
            }
            state.cart[action.index] = {
                ...state.cart[action.index],
                quantity: state.cart[action.index].quantity + action.value
            }
            state.cartTotal += action.value
            localStorage.setItem('CART', JSON.stringify(state.cart));
            localStorage.setItem('CARTTOTAL', JSON.stringify(state.cartTotal));
            return {
                ...state
            }
        case REMOVE_FROM_CART:
            let index = state.cart.findIndex((product) => 
                product["item"].id === action.product["item"].id && product.size === action.product.size
            )
            state.cart.splice(index,1);
            state.cartTotal -= action.product.quantity;
            localStorage.setItem('CART', JSON.stringify(state.cart));
            localStorage.setItem('CARTTOTAL', JSON.stringify(state.cartTotal));
            return{
                ...state
            }
        case CLEAR_CART:
            state.cart = [];
            state.cartTotal = 0 ;
            localStorage.setItem('CART', JSON.stringify(state.cart));
            localStorage.setItem('CARTTOTAL', JSON.stringify(state.cartTotal));
            return {
                ...state,
            }
        case CONFIRM_ORDER_SUCCESS:
            state.cart = [];
            state.cartTotal = 0 ;
            localStorage.setItem('CART', JSON.stringify(state.cart));
            localStorage.setItem('CARTTOTAL', JSON.stringify(state.cartTotal));
            return {
                ...state,
                orderSuccess: true
            }
        case CHANGE_TYPE_ORDER_SUCCESS:
            return {
                ...state,
                orderSuccess: false
            }
        default:
            return state;
    }
}    

export default cartReducer ;