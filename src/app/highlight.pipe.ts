import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value === 'maruti') {
      return 'maruti <b>swift</b>';
    }
    return value;
  }

}
