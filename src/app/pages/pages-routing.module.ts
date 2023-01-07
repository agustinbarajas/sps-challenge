import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

import {
  CART_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_CATALOG_ROUTE,
} from './../constants/routes.cont';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: PRODUCT_CATALOG_ROUTE,
    component: CatalogComponent,
  },
  {
    path: LOGIN_ROUTE,
    component: LoginComponent,
  },
  {
    path: CART_ROUTE,
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
