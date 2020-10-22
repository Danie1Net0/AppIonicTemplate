import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';

import { User } from '@shared/models/user';
import { USER_KEY } from '@core/services/authentication.service';

const { Storage } = Plugins;

@Injectable()
export class UserService {

  private user: User;

  constructor() { }

  public async getUser(): Promise<User> {
    if (!this.user) {
      const { value } = await Storage.get({
        key: USER_KEY
      });

      this.user = JSON.parse(value);
    }

    return this.user;
  }

}
