import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from 'src/app/services/product/product.service';
import { Product } from './../../interfaces/product.interface';

@Pipe({
  name: 'getProduct',
})
export class GetProductPipe implements PipeTransform {
  constructor(private readonly productService: ProductService) {}

  transform(productId: number): Observable<Product> {
    return this.productService.getProduct(productId);
  }
}
