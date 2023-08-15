import { createReducer, on } from '@ngrx/store';
import { addProductToCart,removeProductFromCart } from './app.action';

export interface AppState {
  // product: number;
  // productData: number[];
  // selectedProducts: any[];
  cart: any[];
  removeItem: any[];
}
//work like state file
export const initialState: AppState = {
  // product: 0,
  // productData: [],
  // selectedProducts: [],
  cart: localStorage.getItem('SelectedProducts')
    ? JSON.parse(localStorage.getItem('SelectedProducts')!)
    : [],
    removeItem: [],
};

const _productReducer = createReducer(
  initialState,
  // on(incrementProduct, (state) => {
  //   return {
  //     ...state,
  //     product: state.product + 1,
  //   };
  // }),

  on(removeProductFromCart, (state, { removeProductId })=> {
    debugger;
    const updatedCart =  state.cart.filter((item)=> item.id !== removeProductId);
    localStorage.setItem('SelectedProducts', JSON.stringify(updatedCart));
    console.log(updatedCart);
    return {
      ...state,
      cart: updatedCart,
    }
  }),

  on(addProductToCart, (state, { product }) => {
    return {
      ...state,
      cart: [...state.cart, product], // Add the new product to the selectedProducts array
    };
  })
);

export function productReducer(state: AppState | undefined, action: any) {
  return _productReducer(state, action);
}
