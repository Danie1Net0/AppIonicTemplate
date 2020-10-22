import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

import { UserService } from '@core/services/user.service';
import { Role } from '@shared/models/role';
import { Permission } from '@shared/models/permission';

@Injectable()
export class AccessControlGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.verifyAccess(next);
  }

  public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.verifyAccess(next);
  }

  private async verifyAccess(route: ActivatedRouteSnapshot): Promise<boolean> {
    const roleOrPermission = route.data.roleOrPermission as Array<string>;
    const user = await this.userService.getUser();

    const userRoles = user.roles.map((role: Role) => role.name);
    const userPermissions = user.permissions.map((permission: Permission) => permission.name);

    const hasRoles = userRoles.some(role => roleOrPermission.indexOf(role) >= 0);
    const hasPermissions = userPermissions.some(permission => roleOrPermission.indexOf(permission) >= 0);

    if (!hasRoles && !hasPermissions) {
      return await this.router.navigateByUrl('dashboard');
    }

    return true;
  }

}
