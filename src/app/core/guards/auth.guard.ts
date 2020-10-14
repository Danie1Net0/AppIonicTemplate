import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { AuthenticationService } from '@core/services/authentication.service';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  public canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> {
    return this.authenticationService.isAuthenticated
      .pipe(
        filter(value => value !== null),
        take(1),
        map(isAuthenticated => {
          if (isAuthenticated) {
            return true;
          }

          this.router.navigateByUrl('/auth/login').then();

          return false;
        })
      );
  }
}
