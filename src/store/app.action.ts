// action.ts
import { createAction, props } from '@ngrx/store';

// export const incrementProduct = createAction('[Product] Increment');
// export const addProductToCart = createAction('[Cart] Add Product', props<{ product: any }>());

export const addProductToCart = createAction(
    '[Shop] Add Product To Cart',
    props<{ product: any }>()
  );

export const removeProductFromCart = createAction(
  '[Cart] Remove Product From Cart',
   props<{ removeProductId: any }>()
  );

  export const increamentQuntity = createAction(
    '[Cart] Remove Product From Cart',
    props<{ increment: any }>()
  );