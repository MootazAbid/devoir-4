import { Pipe, PipeTransform } from '@angular/core';
import { Sport } from '../model/sport.model';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {
  transform(sports: Sport[], searchTerm: string): Sport[] {
    if (!searchTerm || !searchTerm.trim()) {
      return sports;
    }
    const term = searchTerm.trim().toLowerCase();
    return sports.filter(s => s.nomSport?.toLowerCase().includes(term));
  }
}
