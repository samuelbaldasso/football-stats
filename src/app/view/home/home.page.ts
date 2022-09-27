import { Observable } from 'rxjs';
import { Ligas } from '../../model/ligas';
import { ApiService } from './../../controller/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  list: Ligas[] = [];
  leagues: Observable<any>;
  page = 0;
  loading: any;
  constructor(private http: ApiService, private route: Router) {}

  ngOnInit(){
    this.leagues = this.http.getAll();
    this.leagues.subscribe(data => console.log(data));
    this.getNames();
  }

    getNames(){
    this.http.getAll().subscribe(data => {
      data.leagues.forEach(el => {
        this.list.push({
          id: el.id,
          name: el.name,
          country: el.country,
          logo: el.logo
        });
      });
    });
  }


}
