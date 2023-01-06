import { Pipe, PipeTransform } from '@angular/core';

import { STAR } from 'src/app/constants/star.const';
import {
  HALF_STAR_COUNT,
  STAR_BORDER,
  STAR_HALF,
} from './../../constants/star.const';

@Pipe({
  name: 'starRateIcon',
})
export class StarRateIconPipe implements PipeTransform {
  transform(rate: number, currentStar: number): string {
    const decimal = Math.abs(rate) - Math.floor(rate);

    if (rate >= currentStar) {
      return STAR;
    }

    if (Math.ceil(rate) === currentStar && decimal > HALF_STAR_COUNT) {
      return STAR_HALF;
    }

    return STAR_BORDER;
  }
}
