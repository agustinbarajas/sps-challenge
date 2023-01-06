import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';

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

  private readonly unsubscribe$ = new Subject();

  constructor(
    private readonly productService: ProductService,
    private readonly categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
    this.categories$ = this.categoriesService.getCategories();

    this.categoryControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((category: string | null) => {
        if (!category) {
          this.products$ = this.productService.getProducts();
        } else {
          this.products$ = this.productService.getProducts(category);
        }
      });
  }

  trackProduct(index: number, product: Product): number {
    return product.id;
  }
}
