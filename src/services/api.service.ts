import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
// import { addProductToCart } from 'src/store/app.action';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://fakestoreapi.com/products/';
  // productData: number[] = [];

  constructor(
    private http: HttpClient,
    private store: Store<{ 
      appState: { product: number; productData: number[] };
     }>
    ) { }

  fetchData(): Observable <any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
    catchError(error => {
      console.error(error);
      return throwError('Something went wrong. Please try again later');
    })
    );
  }
}
