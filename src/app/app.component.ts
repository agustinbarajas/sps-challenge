import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    const hasLogin = this.userService.hasToken();
    this.userService.hasSession$.next(hasLogin);
  }
}
