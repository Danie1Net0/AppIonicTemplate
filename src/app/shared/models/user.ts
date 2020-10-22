import { Permission } from '@shared/models/permission';
import { Role } from '@shared/models/role';

export class User {

  constructor(
    public id?: number,
    public email?: string,
    public phone?: string,
    public name?: string,
    public cpf?: string,
    public roles?: Role[],
    public permissions?: Permission[]
  ) { }

}
