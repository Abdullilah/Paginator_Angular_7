import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.slice(0, -1);
  }
}
