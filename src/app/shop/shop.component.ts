import { Component } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { Store } from '@ngrx/store';
import { addProductToCart } from 'src/store/app.action';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from 'src/store/app.reducer';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  products: any[] = [];
  selectedProducts: Observable<any[]>;

  constructor(
    private apiservice: ApiService,
    private store: Store<{ appState: AppState }>
  ) {
    //this is select method like  redux useSelect method in react js.
    this.selectedProducts = this.store.select((state) => state.appState.cart);
  }

  ngOnInit() {
    this.apiservice.fetchData().subscribe((res)=> {
      this.products = res;
    })
  }

  btn_addToCart(getSelectedProducts: any) {
    // Use `take(1)` to get the first value emitted by `selectedProducts`.
    this.selectedProducts.pipe(take(1)).subscribe((data) => {
      const checkExistingProducts = data.some((items) => items.id === getSelectedProducts.id);
      if (checkExistingProducts) {
        alert('Product already exists in the cart');
      } else {
        // here product comes from the action.ts file and then we dispatch getSelectedProducts and that is stored in ngrx store.
        this.store.dispatch(addProductToCart({ product: getSelectedProducts}));
        localStorage.setItem('SelectedProducts', JSON.stringify([...data, getSelectedProducts]))
        // localStorage.setItem('cart', JSON.stringify([...data, product]));
      }
    });
  }

  // click() {
  //   console.log("this get local items",localStorage.getItem('selectedProducts'));
  // }
}
