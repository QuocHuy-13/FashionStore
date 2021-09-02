export const cart = {
  cart: JSON.parse(localStorage.getItem('CART')) ? JSON.parse(localStorage.getItem('CART')) : [] ,
  cartTotal: JSON.parse(localStorage.getItem('CARTTOTAL')) ? JSON.parse(localStorage.getItem('CARTTOTAL')) : 0,
  vat: 16,
  orderSuccess: false,
  promoCode: [
    {
      code: "TENPERCENT",
      percentage: 10,
    },
    {
      code: "FIVEPERCENT",
      percentage: 5,
    },
  ],
  usedPromoCode: null,
  usedCurrency: { value: 1, name: " $" },
};

