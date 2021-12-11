import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';
@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
 /*   const expectedRole = route.data['expectedRole'];
    const token:any = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload:any = decode(token);*/
   /* if (

      !this.auth.isAuthenticated() ||
      tokenPayload.role !== expectedRole
    )*/
    if (
      !this.auth.isAuthenticated()
    ) {
      this.router.navigate(['sign-in']);
      return false;
    }
    return true;
  }
}
