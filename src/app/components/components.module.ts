import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PipesModule } from '../pipes/pipes.module';
import { CartProductComponent } from './cart-product/cart-product.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { StarRateComponent } from './star-rate/star-rate.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductComponent,
    StarRateComponent,
    CartProductComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    PipesModule,
  ],
  exports: [
    HeaderComponent,
    ProductComponent,
    StarRateComponent,
    CartProductComponent,
  ],
})
export class ComponentsModule {}
