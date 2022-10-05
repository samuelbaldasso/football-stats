import { SplashComponent } from './../splash/splash.component';
import { PlayersInfoComponent } from './../players-info/players-info.component';
import { IntroComponent } from './../intro/intro.component';
import { PlayersListComponent } from './../players-list/players-list.component';
import { TeamsListComponent } from '../teams-list/teams-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'intro',
    component: IntroComponent,
  },
  {
    path: 'teams',
    component: HomePage,
  },
  {
  path: 'info',
  component: TeamsListComponent
},
{
  path: 'player',
  component: PlayersListComponent,
},
{
  path: 'player-info',
  component: PlayersInfoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
