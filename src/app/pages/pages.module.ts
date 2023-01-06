import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';
import { CatalogComponent } from './catalog/catalog.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [CatalogComponent, LoginComponent],
  imports: [CommonModule, PagesRoutingModule, ComponentsModule],
})
export class PagesModule {}
