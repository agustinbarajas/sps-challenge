import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { CART_ROUTE, LOGIN_ROUTE } from './../../constants/routes.cont';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  hasLogin = false;
  cartItems = 0;

  private readonly unsubscribe$ = new Subject();

  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {
    this.userService.hasSession$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((hasLogin: boolean) => {
        this.hasLogin = hasLogin;
      });
  }

  goLogin() {
    this.router.navigate([LOGIN_ROUTE]);
  }

  goCart() {
    this.router.navigate([CART_ROUTE]);
  }

  logout() {
    this.userService.logout();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
