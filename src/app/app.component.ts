import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
  }
  ngOnInit(){
    this.splashScreen();
  }

  private splashScreen(): void {
    setTimeout(() => {
      SplashScreen.hide();
    }, 6000);
  }
}
