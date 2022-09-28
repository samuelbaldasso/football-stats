import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../controller/api.service';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Times } from 'src/app/model/times';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {
  teamInfo: any;

  constructor(private http: ApiService, private route: Router, private router: ActivatedRoute, private nav: NavParams) { }

ngOnInit() {
  this.teamInfo = this.route.getCurrentNavigation().extras.queryParams;
}
}
