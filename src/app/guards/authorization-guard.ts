import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  if(authService.roles.includes("ADMIN")){
    return true;
  }else {
    return router.parseUrl('/admin/notAuthorized');
  }

};
