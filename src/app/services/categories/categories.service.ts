import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private readonly http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
}
