import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _hasSession$ = new BehaviorSubject<boolean>(false);
  private prefixApp = '--ew-';
  private tokenKey = `${this.prefixApp}token`;
  private _userId: number | null = null;

  constructor(private readonly http: HttpClient) {}

  get hasSession$(): BehaviorSubject<boolean> {
    return this._hasSession$;
  }

  get userId(): number | null {
    if (!this._userId) {
      this.assignUserId();
    }
    return this._userId;
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
          this._userId = +(this.decodeToken(token)?.sub as string);
          this.hasSession$.next(true);
        })
      );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this._userId = null;
    this.hasSession$.next(false);
  }

  hasToken(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      this.assignUserId();
    }
    return !!token;
  }

  private decodeToken(token: string): JwtPayload {
    return jwtDecode<JwtPayload>(token);
  }

  private assignUserId(): boolean {
    const token = localStorage.getItem(this.tokenKey) as string;
    this._userId = +(this.decodeToken(token)?.sub as string);
    return !!this._userId;
  }
}
