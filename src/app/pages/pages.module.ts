import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
