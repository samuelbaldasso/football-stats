import { element } from 'protractor';
import { ActivatedRoute, Router } from '@angular/router';
import { Times } from '../../model/times';
import { ApiService } from '../../controller/api.service';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {
  teamsList: any;
  teams: Times[] = [];
  constructor(private http: ApiService, private route: Router, private router: ActivatedRoute, private nav: NavParams) { }

ngOnInit() {
   this.teamsList = this.route.getCurrentNavigation().extras.queryParams;
   this.teams = this.teamsList.map(el => el.name);
}
}
