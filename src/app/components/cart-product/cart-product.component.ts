import { Component, Input } from '@angular/core';

import { Product } from './../../interfaces/product.interface';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent {
  @Input() product!: Product;
}
