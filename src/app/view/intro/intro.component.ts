import { Component, OnInit } from '@angular/core';
import { faFutbol, faUsers } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  faFut = faFutbol;
  faUser = faUsers;
  constructor() { }

  ngOnInit() {}

}
