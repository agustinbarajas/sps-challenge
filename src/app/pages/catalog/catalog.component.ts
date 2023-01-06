import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoriesService } from './../../services/categories/categories.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  products$!: Observable<Product[]>;
  categories$!: Observable<string[]>;
  categoryControl = new FormControl('');

  constructor(
    private readonly productService: ProductService,
    private readonly categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
    this.categories$ = this.categoriesService.getCategories();
  }

  trackProduct(index: number, product: Product): number {
    return product.id;
  }
}
