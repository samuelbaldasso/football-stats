import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/controller/api.service';
import { Jogador } from 'src/app/model/jogador';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.scss'],
})
export class PlayersInfoComponent implements OnInit {
    playerInfo: any;
    constructor(private http: ApiService, private route: Router) { }

    ngOnInit() {
      this.playerInfo = this.route.getCurrentNavigation().extras.queryParams;
    }

  }
