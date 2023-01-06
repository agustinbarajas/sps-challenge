import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { StarRateComponent } from './star-rate/star-rate.component';

@NgModule({
  declarations: [HeaderComponent, ProductComponent, StarRateComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  exports: [HeaderComponent, ProductComponent, StarRateComponent],
})
export class ComponentsModule {}
