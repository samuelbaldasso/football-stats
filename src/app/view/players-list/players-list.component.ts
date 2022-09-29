import { Router } from '@angular/router';
import { Jogador } from './../../model/jogador';
import { ApiService } from './../../controller/api.service';
import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrows } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent implements OnInit {
  player: Jogador[] = [];
  faArrow = faArrowLeft;
  searchText = '';

  constructor(private http: ApiService, private route: Router) { }

  ngOnInit() {
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
    });
  }

  redirectToPlayersPage(id){
    this.route.navigate(['player-info'], {queryParams: id});
}
}
