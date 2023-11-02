import { createStore, Action } from "redux";
interface AppState {
  cart: any[];
}
interface GetLocal extends Action {
  type: "GETLOCAL";
  payload: [];
}

interface AddToCartAction extends Action {
  type: "ADD_TO_CART";
  payload: {
    detailId: number;
    numberBuy: number;
    img: string;
    color: string;
    nameGlass: string;
    price: number;
    totalPrice: number;
    maxNumber: number;
    rgb: string;
  };
}
interface RemoveFromCartAction extends Action {
  type: "REMOVE_FROM_CART";
  payload: {
    detailId: number;
  };
}
interface UpdateCart extends Action {
  type: "UPDATE_FROM_CART";
  payload: {
    detailId: number;
    numberBuy: number;
  };
}
interface ClearCart extends Action {
  type: "CLEAR_CART";
  payload: {};
}
//
const initialState: AppState = {
  cart: [],
};
const store = createStore(
  (
    state: AppState = initialState,
    action:
      | AddToCartAction
      | RemoveFromCartAction
      | UpdateCart
      | ClearCart
      | GetLocal
  ) => {
    if (action.type === "ADD_TO_CART") {
      const cart = [...state.cart];
      const { payload } = action as AddToCartAction;
      const findIndex = cart.findIndex((e) => e.detailId === payload.detailId);
      if (findIndex > -1) {
        cart[findIndex].numberBuy += payload.numberBuy;
      } else {
        cart.push(payload);
      }
      return {
        ...state,
        cart: [...cart],
      };
    } else if (action.type === "REMOVE_FROM_CART") {
      const cart = [...state.cart];
      const { payload } = action as RemoveFromCartAction;
      const findIndex = cart.findIndex((e) => e.detailId === payload.detailId);
      if (findIndex > -1) {
        cart.splice(findIndex, 1);
        return {
          ...state,
          cart: cart,
        };
      }
      return state;
    } else if (action.type === "UPDATE_FROM_CART") {
      const { payload } = action as UpdateCart;
      const cart = [...state.cart];
      const findIndex = cart.findIndex((e) => e.detailId === payload.detailId);
      if (findIndex > -1) {
        cart[findIndex].numberBuy = payload.numberBuy;
        return {
          ...state,
          cart: cart,
        };
      }
      return state;
    } else if (action.type === "CLEAR_CART") {
      const cart: any = [];
      return {
        ...state,
        cart: cart,
      };
    } else if (action.type === "GETLOCAL") {
      return {
        ...state,
        cart: action.payload,
      };
    }
    return state;
  }
);
export default store;
