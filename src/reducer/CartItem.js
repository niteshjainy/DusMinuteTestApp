import { Data } from "../data";

const initialState = {
  product_list: Data,
  cart_product: [],
};
const CartItem = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let product_list = state.product_list.map((item) => {
        return item.id === action.payload.id
          ? { ...item, order_quantity: item.order_quantity + 1 }
          : item;
      });
      let cart_product = product_list.filter((item) => {
        return !(item.order_quantity == 0);
      });
      return { ...state, product_list, cart_product };

    case "REMOVE_FROM_CART":
      product_list = state.product_list.map((item) => {
        return item.id === action.payload.id
          ? { ...item, order_quantity: item.order_quantity - 1 }
          : item;
      });
      cart_product = product_list.filter((item) => {
        return !(item.order_quantity == 0);
      });
      return { ...state, product_list, cart_product };

    case "RESET":
      return { ...state, product_list: Data, cart_product: [] };
    default:
      return state;
  }
};

export default CartItem;
