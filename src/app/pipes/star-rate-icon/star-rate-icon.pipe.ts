import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRateIcon',
})
export class StarRateIconPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
