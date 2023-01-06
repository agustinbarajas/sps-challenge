import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _hasSession$ = new BehaviorSubject<boolean>(false);
  private prefixApp = '--ew-';
  private tokenKey = `${this.prefixApp}token`;

  constructor(private readonly http: HttpClient) {}

  get hasSession$(): BehaviorSubject<boolean> {
    return this._hasSession$;
  }

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>('https://fakestoreapi.com/auth/login', {
        username,
        password,
      })
      .pipe(
        tap(({ token }) => {
          localStorage.setItem(this.tokenKey, btoa(token));
          this.hasSession$.next(true);
        })
      );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.hasSession$.next(false);
  }

  hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
