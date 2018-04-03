import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(clubs: any, term: any): any {
  //check  if serach term if undefeined
  if (term === undefined) return clubs;
  // return the updated clubs array
  return clubs.filter(function(club) {
    return club.name.toLowerCase().includes(term.toLowerCase());
  })
  }

}
