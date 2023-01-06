import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private readonly productService: ProductService) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  trackProduct(index: number, product: Product): number {
    return product.id;
  }
}
