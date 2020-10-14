import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Environment } from '@shared/decorators/environment.decorator';
import { ConfirmRegistration } from '@auth/models/confirm-registration';

@Injectable()
export class ConfirmRegistrationService {

  @Environment('API_URL') API_URL;

  constructor(private httpClient: HttpClient) { }

  public confirmRegistration(confirmRegistration: ConfirmRegistration): Observable<ConfirmRegistration> {
    const url = `${ this.API_URL }/api/auth/confirm-registration`;
    return this.httpClient.post<ConfirmRegistration>(url, confirmRegistration).pipe(take(1));
  }

  public resendCode(confirmRegistration: ConfirmRegistration): Observable<ConfirmRegistration> {
    const url = `${ this.API_URL }/api/auth/confirm-registration/resend-code`;
    return this.httpClient.post<ConfirmRegistration>(url, confirmRegistration).pipe(take(1));
  }

}
