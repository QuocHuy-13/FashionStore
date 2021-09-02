import { FAKE_FETCH_DATA, SORT_BY_TYPE, FILTER_BY_PRICE,
    ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART,HANDLE_CHANGE_QUANTITY,
    CONFIRM_ORDER_SUCCESS,CHANGE_TYPE_ORDER_SUCCESS } from "./type"

export const fakeFetchData = (data) => {
    return {
        type: FAKE_FETCH_DATA,
        data: data
    }
}

export const sortProductByType = (item, typeSort) => {
    let products = item.slice();
    if (typeSort !== "") {
        products.sort((a, b) =>
            typeSort === "price_lth" ? a.price > b.price ? 1 : -1
                : a.price < b.price ? 1 : -1
        )
    } else {
        products.sort((a, b) => a.id > b.id ? 1 : -1)
    }
    return {
        type: SORT_BY_TYPE,
        item: products,
        typeSort: typeSort
    }
}

export const filterProductByPrice = (item, price) => {
    let productFilter = [];
    switch (price) {
        case "All Price":
            productFilter = [...item];
            break;
        case "$0 to $50":
            productFilter = item.filter((product) => {
                return product.price > 0 && product.price < 50;
            });
            break;
        case "$50 to $100":
            productFilter = item.filter((product) => {
                return product.price >= 50 && product.price < 100;
            });
            break;
        case "$100 to $200":
            productFilter = item.filter((product) => {
                return product.price >= 100 && product.price < 200;
            });
            break;
        case "More than $200":
            productFilter = item.filter((product) => {
                return product.price >= 200;
            });
            break;
        default:
            return productFilter;
    }
    return {
        type: FILTER_BY_PRICE,
        item: productFilter
    }
}

export const addToCart = (productDetails) => {
    return {
        type: ADD_TO_CART,
        product: productDetails,
    }
}

export const removeCartProduct = (product) => {
    return {
        type: REMOVE_FROM_CART,
        product: product
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}

export const handleChangeQuantity = (index, value) => {
    return {
        type: HANDLE_CHANGE_QUANTITY,
        index: index,
        value: value
    }
}

export const confirmOrderSuccess = () => {
    return {
        type: CONFIRM_ORDER_SUCCESS,
    }
}

export const changeTypeOrderSuccess = () => {
    return {
        type: CHANGE_TYPE_ORDER_SUCCESS,
    }
}