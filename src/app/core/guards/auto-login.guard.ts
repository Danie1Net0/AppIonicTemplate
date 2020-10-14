import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { AuthenticationService } from '@core/services/authentication.service';

@Injectable()
export class AutoLoginGuard implements CanLoad {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  public canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> {
    return this.authenticationService.isAuthenticated
      .pipe(
        filter(value => value != null),
        take(1),
        map((isAuthenticated: boolean) => {
          if (isAuthenticated) {
            this.router.navigateByUrl('/dashboard/tabs', {
              replaceUrl: true
            }).then();
          }

          return true;
        })
      );
  }
}
