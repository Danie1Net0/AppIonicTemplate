import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

import { EmitValueService } from '@core/services/emit-value.service';

@Injectable()
export class ResetPasswordGuard implements CanLoad {

  constructor(
    private emitValueService: EmitValueService,
    private router: Router
  ) { }

  public canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    const resetPassword = this.emitValueService.getValue('resetPassword');

    if (!resetPassword) {
      return this.router.navigateByUrl('/auth/login');
    }

    return true;
  }
}
