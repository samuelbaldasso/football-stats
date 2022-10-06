import { Times } from './../../model/times';
import { ApiService } from './../../controller/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faArrowLeft, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';

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
  faTeams = faUsers;
  searchText = '';
  constructor(private http: ApiService, private route: Router, private router: ActivatedRoute) {}

  ngOnInit(){
  }

  redirectToTeamsPage(id){
    this.route.navigate(['info'], {queryParams: id});
  }

  loadData(event) {
    setTimeout(() => {
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
        if(data.length <= 428){
          event.target.complete();
        } else {
          event.target.disabled = true;
        }
      });
    }, 500);
  }
}
