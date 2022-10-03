import { Pipe, PipeTransform } from '@angular/core';
import { Times } from './../model/times';

@Pipe({ name: 'filterTeams' })
export class FilterTeamsPipe implements PipeTransform {
    transform(teams: Times[], searchText: string) {
        if(teams.length === 0 || searchText === ''){
          return teams;
        }else{
          return teams.filter((team) => team.name.toLowerCase() === searchText.toLowerCase());
        }
      }
  }
