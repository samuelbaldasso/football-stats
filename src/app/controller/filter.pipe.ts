import { Jogador } from './../model/jogador';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    // transform(players: Jogador[], searchText: string) {
    //     if(players.length === 0 || searchText === ''){
    //       return players;
    //     }else{
    //       return players.filter((player) => player.firstname.toLowerCase() === searchText.toLowerCase());
    //     }
    //   }
    transform(items: Jogador[], searchText: string): any[] {
      if (!items) {
        return [];
      }
      if (!searchText) {
        return items;
      }
      searchText = searchText.toLowerCase();

      return items.filter(it => it.firstname.toLowerCase().includes(searchText));
    }
  }
