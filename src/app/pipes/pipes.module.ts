import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncatePipe } from './truncate/truncate.pipe';
import { StarRateIconPipe } from './star-rate-icon/star-rate-icon.pipe';
import { GetProductPipe } from './get-product/get-product.pipe';

@NgModule({
  declarations: [TruncatePipe, StarRateIconPipe, GetProductPipe],
  imports: [CommonModule],
  exports: [TruncatePipe, StarRateIconPipe, GetProductPipe],
})
export class PipesModule {}
