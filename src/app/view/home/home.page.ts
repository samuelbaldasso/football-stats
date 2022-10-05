import { Times } from './../../model/times';
import { ApiService } from './../../controller/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faArrowLeft, faSearch, faPerson } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  list: Times[] = [];
  id: number;
  faArrow = faArrowLeft;
  faSearch = faSearch;
  faTeams = faPerson;
  searchText = '';
    constructor(private http: ApiService, private route: Router, private router: ActivatedRoute) {}

  ngOnInit(){
    this.getNames();
  }

  getNames(){
    this.http.getAllTeams().subscribe(data => {
      data.data.forEach(el => {
        this.list.push({
          id: el.team_id,
          name: el.name,
          shortCode: el.short_code,
          logo: el.logo,
          country: el.country
        });
      });
    });
  }

  redirectToTeamsPage(id){
    this.route.navigate(['info'], {queryParams: id});
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.getNames();
    }, 500);
  }
}
