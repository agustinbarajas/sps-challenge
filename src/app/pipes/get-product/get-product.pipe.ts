import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getProduct',
})
export class GetProductPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
