import { Router } from '@angular/router';
import { Jogador } from './../../model/jogador';
import { ApiService } from './../../controller/api.service';
import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent implements OnInit {
  player: Jogador[] = [];
  faArrow = faArrowLeft;
  faArrowRight = faArrowRight;
  faSearch = faSearch;
  searchText = '';
  faPerson = faUser;

  constructor(private http: ApiService, private route: Router) { }

  ngOnInit() {
  }

  redirectToPlayersPage(id){
    this.route.navigate(['player-info'], {queryParams: id});
}

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.http.getAllInfoTeam().subscribe(data => {
        data.data.forEach(element => {
          this.player.push({
            id: element.player_id,
            firstname: element.firstname,
            lastname: element.lastname,
            birthday: element.birthday,
            age: element.age,
            weight: element.weight,
            height: element.height,
            img: element.img,
            country: element.country
          });
        });
        if(data.length <= 923){
          event.target.complete();
        } else {
          event.target.disabled = true;
        }
    });
    }, 500);
  }
  }
