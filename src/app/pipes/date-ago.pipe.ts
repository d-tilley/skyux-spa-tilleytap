/**
 * Based off of work from Shifatul Islam; thank you sir
 * https://medium.com/@thunderroid/angular-date-ago-pipe-minutes-hours-days-months-years-ago-c4b5efae5fe5
 * https://gist.github.com/shifatul-i/cfacd00f6d36a7d6d03aa52f33ca23fd#file-date-ago-pipe-ts
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dateAgo',
    pure: true
})
export class DateAgoPipe implements PipeTransform {

  public transform(timestamp: any, args?: any): any {
    if (timestamp) {
      const seconds = Math.floor((+new Date() - +new Date(timestamp)) / 1000);

      const intervals = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
      };

      let counter;
      for (let [key, value] of Object.entries(intervals)) {
        counter = Math.floor(seconds / value);
        if (counter > 0) {
          if (counter === 1) {
            return counter + ' ' + key; // singular (1 day ago)
          } else {
            return counter + ' ' + key + 's'; // plural (2 days ago)
          }
        }
      }

      return timestamp;
    }
  }
}
