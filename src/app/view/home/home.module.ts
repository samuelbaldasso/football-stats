/* eslint-disable max-len */
import { PlayersInfoComponent } from './../players-info/players-info.component';
import { IntroComponent } from './../intro/intro.component';
import { PlayersListComponent } from './../players-list/players-list.component';
import { TeamsListComponent } from './../teams-list/teams-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageRoutingModule } from './home-routing.module';
import { SplashComponent } from '../splash/splash.component';
import { FilterPipe } from 'src/app/controller/filter.pipe';
import { FilterTeamsPipe } from 'src/app/controller/filterTeams.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [FilterPipe, FilterTeamsPipe, HomePage,
    TeamsListComponent, PlayersListComponent, IntroComponent, SplashComponent,
    PlayersInfoComponent]
})
export class HomePageModule {}
