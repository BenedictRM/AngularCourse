import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    let results = [];
    if(value.length === 0)
      return value;
    else
      return value.split("").reverse().join("");
  }

}
