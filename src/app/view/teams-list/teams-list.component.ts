import { ApiService } from './../../controller/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {
appModal = [];
  constructor(private http: ApiService) { }

  ngOnInit() {
    this.http.getAll().subscribe(data => {
      data.leagues.teams.forEach(el => {
        this.appModal.push({
          id: el.id,
          name: el.name,
          city: el.city,
          founded: el.founded,
          details: el.details,
          logo: el.logo
        });
      });
    });
  }

}
