import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    let results = [];
    if(value.length === 0)
      return value;
    else
      return value.sort((a: any, b: any ) => {
        return a.name === b.name ? 0 : +(a.name > b.name) || -1;
      });
  }

}
