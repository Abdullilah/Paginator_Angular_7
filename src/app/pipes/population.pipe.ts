import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'population'
})
export class PopulationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNaN(value)) {
      return 'there is no information about the population on this planet';
    } else {
      return 'the population is: ' + parseFloat(value).toLocaleString('en');
    }
  }

}
