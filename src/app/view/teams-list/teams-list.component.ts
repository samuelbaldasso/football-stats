import { ActivatedRoute, Router } from '@angular/router';
import { Times } from '../../model/times';
import { ApiService } from './../../controller/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {
  appModal: Times[] = [];
  team: any;

  constructor(private http: ApiService, private route: Router) { }

  ngOnInit() {
    this.getTeams();
}

  getTeams(){
    this.http.getAll().subscribe(data => {
      data.leagues.map(el => {
        el.teams.forEach(element => {
          this.appModal.push({
            id: element.id,
            name: element.name,
            city: element.city,
            founded: element.founded,
            details: element.details,
            logo: element.logo
          });
        });
      });
    });
  }
}
