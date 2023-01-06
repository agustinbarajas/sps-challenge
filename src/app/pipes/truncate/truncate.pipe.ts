import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, length = 35, suffix = '...'): string {
    if (text?.length > length) {
      return text.slice(0, length).trim().concat(suffix);
    }
    return text;
  }
}
