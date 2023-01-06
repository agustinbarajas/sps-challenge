import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncatePipe } from './truncate/truncate.pipe';
import { StarRateIconPipe } from './star-rate-icon/star-rate-icon.pipe';

@NgModule({
  declarations: [TruncatePipe, StarRateIconPipe],
  imports: [CommonModule],
  exports: [TruncatePipe, StarRateIconPipe],
})
export class PipesModule {}
