import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'scenarios',
    loadChildren: './scenarios/scenarios.module#ScenariosModule'
  },
  {
    path: 'party',
    loadChildren: './party/party.module#PartyModule'
  },
  {
    path: 'calculators',
    loadChildren: './calculators/calculators.module#CalculatorsModule'
  },
  {
    path: 'achievements',
    loadChildren: './achievements/achievements.module#AchievementsModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
