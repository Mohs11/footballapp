import { Pipe, PipeTransform } from '@angular/core';
import { Club } from '../modles/Clubs';

@Pipe({
  name: 'clubfilter',
  pure: false
})
export class ClubFilterPipe implements PipeTransform {
  transform(items: Club[], filter: Club): Club[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item: Club) => this.applyFilter(item, filter));
  }

applyFilter(club: Club, filter: Club): boolean {
  for (let field in filter) {
    if (filter[field]) {
      if (typeof filter[field] === 'string') {
        if (club[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
          return false;
        }
      } else if (typeof filter[field] === 'number') {
        if (club[field] !== filter[field]) {
          return false; 
        }
      }
    }
  }
  return true;
}

}
