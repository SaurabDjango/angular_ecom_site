import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from 'src/store/app.reducer';
import { removeProductFromCart } from 'src/store/app.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: Observable<any[]>;
  totalAmount: number[] = [];
  removeItems:  Observable<any[]>;;

  constructor(private store: Store<{ appState: AppState}>) {
     this.products = this.store.select((state) => state.appState.cart)
     this.removeItems = this.store.select((state) => state.appState.removeItem)     
  }

  ngOnInit() {
    this.products.pipe(
      map((items)=> items.reduce((total, product)=> total + product.price, 0))
    ).subscribe((total) => {
      this.totalAmount = total;
    });
    console.log("localStorage data",localStorage.getItem('SelectedProducts'));
  }

  removeProduct(removeProductId: number) {
    debugger;
      this.store.dispatch(removeProductFromCart({removeProductId: removeProductId}));
    console.log(removeProductId)
  }
  
}
