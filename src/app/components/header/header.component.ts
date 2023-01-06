import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LOGIN_ROUTE } from './../../constants/routes.cont';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  hasLogin = false;
  cartItems = 0;

  constructor(private readonly router: Router) {}

  goLogin() {
    this.router.navigate([LOGIN_ROUTE]);
  }
}
