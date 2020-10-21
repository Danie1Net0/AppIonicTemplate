import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Environment } from '@shared/decorators/environment.decorator';
import { ForgotPassword } from '@auth/models/forgot-password';
import { ResetPassword } from '@auth/models/reset-password';

@Injectable()
export class RecoverPasswordService {

  @Environment('API_URL') API_URL;

  constructor(private httpClient: HttpClient) { }

  public forgotPassword(forgotPassword: ForgotPassword): Observable<any> {
    const url = `${ this.API_URL }/api/auth/password/forgot`;
    return this.httpClient.post<any>(url, forgotPassword).pipe(take(1));
  }

  public checkCode(code: number[]): Observable<any> {
    const url = `${ this.API_URL }/api/auth/password/check-code`;
    return this.httpClient.post<any>(url, { code }).pipe(take(1));
  }

  public resetPassword(resetPassword: ResetPassword): Observable<any> {
    const url = `${ this.API_URL }/api/auth/password/reset`;
    return this.httpClient.post<any>(url, resetPassword).pipe(take(1));
  }

}
