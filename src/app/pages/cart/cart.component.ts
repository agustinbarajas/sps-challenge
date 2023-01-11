import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Cart } from 'src/app/interfaces/cart.interface';
import { CartService } from './../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart$!: Observable<Cart>;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cart$ = this.cartService.getCart();
  }
}
