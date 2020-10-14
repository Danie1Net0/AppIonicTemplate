import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class EmitValueService {

  private readonly data: any[] = [];

  constructor(private router: Router) { }

  public async emitValue(key: string, value: any, url: string = '', routerOptions = {}) {
    this.data[key] = value;

    if (url !== '') {
      await this.router.navigateByUrl(url, routerOptions);
    }
  }

  public getValue(key: string): any{
    return this.data[key];
  }

  public deleteValue(key: string): void {
    delete this.data[key];
  }

}
