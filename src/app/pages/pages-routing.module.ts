import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LOGIN_ROUTE, PRODUCT_CATALOG_ROUTE } from './../constants/routes.cont';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
