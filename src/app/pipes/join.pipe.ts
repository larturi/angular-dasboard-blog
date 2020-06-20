import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(arr: any[], field: string, separator: string): unknown {

    if (arr) {
      return _.map(arr, field).join(separator);
    }
    return null;
  }

}
