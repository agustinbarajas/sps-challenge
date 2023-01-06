import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LOGIN_ROUTE } from './../../constants/routes.cont';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  hasLogin = false;
  cartItems = 0;

  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  goLogin() {
    this.router.navigate([LOGIN_ROUTE]);
  }

  logout() {
    this.userService.logout();
  }
}
