import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string, maxChars: number): unknown {
    return `${value.substring(0, maxChars)}${value.length > maxChars ? '...' : ''}`;
  }

}
