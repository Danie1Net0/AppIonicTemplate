import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { Plugins } from '@capacitor/core';

import { Environment } from '@shared/decorators/environment.decorator';
import { Credentials } from '@auth/models/credentials';

const { Storage } = Plugins;
const TOKEN_KEY = 'user-token';

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
        map((data: any) => data.token),
        switchMap((token: string) => {
          return from(this.storageToken(token));
        }),
        tap(_ => {
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

  public logout(): Observable<any> {
    const url = `${ this.API_URL }/api/auth/logout`;

    return this.httpClient.post(url, {})
      .pipe(
        take(1),
        tap(_ => {
          this.isAuthenticated.next(false);

          Storage.remove({
            key: TOKEN_KEY
          });
        })
      );
  }

}
