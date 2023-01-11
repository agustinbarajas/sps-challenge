import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly http: HttpClient) {}

  getProducts(category?: string): Observable<Product[]> {
    let productsUrl = 'https://fakestoreapi.com/products';
    if (category) {
      productsUrl += `/category/${category}`;
    }
    return this.http.get<Product[]>(productsUrl);
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(
      `https://fakestoreapi.com/products/${productId}`
    );
  }
}
