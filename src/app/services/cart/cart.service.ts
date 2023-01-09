import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, takeUntil, tap } from 'rxjs';

import { Cart } from 'src/app/interfaces/cart.interface';
import { UserService } from './../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnDestroy {
  private localCart: Cart = {
    date: new Date().toLocaleString(),
    products: [],
  };
  private cart$ = new BehaviorSubject<Cart>(this.localCart);
  private hasSession = false;

  private readonly unsubscribe$ = new Subject();

  constructor(
    private readonly http: HttpClient,
    private readonly userService: UserService
  ) {
    this.userService.hasSession$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((hasSession: boolean) => {
        this.hasSession = hasSession;
        this.localCart.userId = this.hasSession
          ? (this.userService.userId as number)
          : undefined;
        this.cart$.next(this.localCart);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  getCart(cartId?: number): Observable<Cart> {
    if (!this.hasSession || !cartId) {
      return of(this.localCart);
    }

    return this.http.get<Cart>(`https://fakestoreapi.com/carts/${cartId}`).pipe(
      tap((cart: Cart) => {
        this.updateLocalCart(cart);
      })
    );
  }

  createCart(cart: Cart): Observable<Cart> {
    if (!this.hasSession) {
      return of(cart).pipe(
        tap((cart: Cart) => {
          this.updateLocalCart(cart);
        })
      );
    }

    return this.http
      .post<Cart>('https://fakestoreapi.com/carts', { ...cart })
      .pipe(
        tap((cart: Cart) => {
          this.updateLocalCart(cart);
        })
      );
  }

  updateCart(cart: Cart): Observable<Cart> {
    if (!this.hasSession) {
      return of(cart).pipe(
        tap((cart: Cart) => {
          this.updateLocalCart(cart);
        })
      );
    }

    return this.http
      .put<Cart>(`https://fakestoreapi.com/carts/${cart.id}`, {
        ...cart,
      })
      .pipe(
        tap((cart: Cart) => {
          this.updateLocalCart(cart);
        })
      );
  }

  private updateLocalCart(cart: Cart): void {
    this.localCart = cart;
    this.cart$.next(cart);
  }
}
