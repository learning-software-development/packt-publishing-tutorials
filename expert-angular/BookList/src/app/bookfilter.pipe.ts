import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookfilter'
})
export class BookfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
