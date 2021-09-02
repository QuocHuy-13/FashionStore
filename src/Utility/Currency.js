export const productPrice = (price) => {
    return Math.round(price).toFixed(2);
};

export const productDiscountPrice = (price, discountPrice) => {
    return `-${Math.round(((discountPrice - price) * 100) / discountPrice)}%`;
};
