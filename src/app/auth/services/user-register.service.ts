import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { HandleErrorService } from '@core/services/handle-error.service';
import { Environment } from '@shared/decorators/environment.decorator';
import { UserRegister } from '@auth/models/user-register';

@Injectable()
export class UserRegisterService {

  @Environment('API_URL') API_URL;

  constructor(
    private httpClient: HttpClient,
    private handleErrorService: HandleErrorService
  ) { }

  public register(userRegister: UserRegister): Observable<UserRegister> {
    const url = `${ this.API_URL }/api/users`;

    return this.httpClient.post<UserRegister>(url, userRegister).
      pipe(
        catchError(this.handleErrorService.handleError<UserRegister>('register user')),
        take(1)
      );
  }
}
