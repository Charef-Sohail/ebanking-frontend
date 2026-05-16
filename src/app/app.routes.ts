import { Routes } from '@angular/router';
import { Customers } from './customers/customers';

import { NewCustomer } from './new-customer/new-customer';
import { AccountsComponent } from './accounts/accounts';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts';
import { Login } from './login/login';
import { AdminTemplate } from './admin-template/admin-template';
import { authorizationGuard } from './guards/authorization-guard';
import { NotAuthorized } from './not-authorized/not-authorized';
import { authenticationGuard } from './guards/authentication-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: "", redirectTo: "/login", pathMatch: "full"},
  {
    path: 'admin', component: AdminTemplate, canActivate: [authenticationGuard] , children: [
      { path: "customers", component: Customers },
      { path :"accounts", component : AccountsComponent },
      { path:"new-customer", component: NewCustomer,  canActivate: [authorizationGuard], data:{role:"ADMIN"}},
      { path :"customer-accounts/:id", component : CustomerAccountsComponent},
      { path :"notAuthorized", component : NotAuthorized},
    ]
  },

];
