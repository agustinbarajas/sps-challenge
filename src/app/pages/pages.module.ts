import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ComponentsModule } from '../components/components.module';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [CatalogComponent, LoginComponent, CartComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
