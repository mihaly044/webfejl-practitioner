import { Pipe, PipeTransform } from '@angular/core';
import { Pracititioner } from '../model/practitioner.model';

@Pipe({
  name: 'displayItem'
})
export class DisplayItemPipe implements PipeTransform {

  transform(value: Pracititioner): string {

    if(value?.name) {
      return value?.name[0].given + " " +value.name[0].family;
    } else {
      return "unnamed";
    }
  }

}
