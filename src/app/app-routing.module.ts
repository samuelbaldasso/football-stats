import { HomePage } from './view/home/home.page';
import { TeamsListComponent } from './view/teams-list/teams-list.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './view/players-list/players-list.component';
import { IntroComponent } from './view/intro/intro.component';
import { PlayersInfoComponent } from './view/players-info/players-info.component';
import { SplashComponent } from './view/splash/splash.component';

const routes: Routes = [
  {
    path: 'splash',
    component: SplashComponent,
    loadChildren: () => import('./view/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'intro',
    component: IntroComponent,
    loadChildren: () => import('./view/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'teams',
    component: HomePage,
    loadChildren: () => import('./view/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'info',
    component: TeamsListComponent,
    loadChildren: () => import('./view/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'player',
    component: PlayersListComponent,
    loadChildren: () => import('./view/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'player-info',
    component: PlayersInfoComponent,
    loadChildren: () => import('./view/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
