import { Ligas } from './../../model/ligas';
import { ApiService } from './../../controller/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  list: Ligas[] = [];

  constructor(private http: ApiService) {}

  ngOnInit(){
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
