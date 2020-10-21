import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { AuthenticationService } from '@core/services/authentication.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.verifyAuthentication();
  }

  public canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.verifyAuthentication();
  }

  public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.verifyAuthentication();
  }

  private verifyAuthentication(): Observable<boolean> {
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
