import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookCode'
})
export class BookCodePipe implements PipeTransform {
  transform(id: number): string {
    return `Ref-${id.toString()}`;
  }
}