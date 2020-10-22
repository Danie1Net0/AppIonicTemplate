import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { Plugins } from '@capacitor/core';

import { Environment } from '@shared/decorators/environment.decorator';
import { Credentials } from '@auth/models/credentials';
import { User } from '@shared/models/user';

const { Storage } = Plugins;
const TOKEN_KEY = 'user-token';
export const USER_KEY = 'user';

@Injectable()
export class AuthenticationService {

  @Environment('API_URL') API_URL;

  public isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  private token = '';

  constructor(private httpClient: HttpClient) {
    this.loadToken()
      .then();
  }

  private async loadToken() {
    const token = await Storage.get({
      key: TOKEN_KEY
    });

    if (token?.value) {
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  public login(credentials: Credentials): Observable<any> {
    const url = `${ this.API_URL }/api/auth/login`;

    return this.httpClient.post(url, credentials)
      .pipe(
        take(1),
        tap(async (response: any) => {
          await this.storageToken(response.data.token);
          await this.storageUser(response.data.user);
          this.isAuthenticated.next(true);
        })
      );
  }

  public storageToken(token: string): Promise<void> {
    return Storage.set({
      key: TOKEN_KEY,
      value: token
    });
  }

  public storageUser(user: User): Promise<void> {
    return Storage.set({
      key: USER_KEY,
      value: JSON.stringify(user)
    });
  }

  public logout(): Observable<any> {
    const url = `${ this.API_URL }/api/auth/logout`;

    return this.httpClient.post(url, {})
      .pipe(
        take(1),
        tap(async _ => {
          this.isAuthenticated.next(false);
          await Storage.clear();
        })
      );
  }

}
