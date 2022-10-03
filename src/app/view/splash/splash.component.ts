import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  constructor(private splashScreen: SplashScreen, private platform: Platform, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('intro');
    }, 6000);
  }

}
