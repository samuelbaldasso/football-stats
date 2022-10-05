import { Pipe, PipeTransform } from '@angular/core';
import { Times } from './../model/times';

@Pipe({ name: 'filterTeams' })
export class FilterTeamsPipe implements PipeTransform {
      transform(items: Times[], searchText: string): any[] {
        if (!items) {
          return [];
        }
        if (!searchText) {
          return items;
        }
        searchText = searchText.toLowerCase();

        return items.filter(it => it.name.toLowerCase().includes(searchText));
      }
  }
