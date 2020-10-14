import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class HandleErrorService {

  constructor() { }

  public handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`Operation '${ operation }' failed: ${ error.message }`);

      return of(result);
    };
  }

}
