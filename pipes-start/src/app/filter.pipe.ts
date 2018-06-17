import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //force recalculation whenever ANYTHING changes on the page
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    let results = [];
    if(value.length === 0 || filterString === '')
      return value;
    for(let v of value) {
      if(v[propName] === filterString){
        results.push(v);
      }
    }
    return results;
  }
}
