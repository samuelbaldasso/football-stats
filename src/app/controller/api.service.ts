import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const api = environment.url;
const apiToken = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getAllInfoTeam(): Observable<any>{
    const url = `${api}/soccer/players/?apikey=${apiToken}&country_id=25`;
    return this.http.get(url);
  }

  getAllTeams(): Observable<any>{
    const url = `${api}/soccer/teams/?apikey=${apiToken}&country_id=25`;
    return this.http.get(url);
  }

  getTeamById(id: number): Observable<any>{
    const url = `${api}/soccer/teams/${id}/?apikey=${apiToken}&country_id=25`;
    return this.http.get(url);
  }
}
