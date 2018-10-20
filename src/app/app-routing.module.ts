import { NgModule } from '@angular/core';
import { RouterModule, Router, Route, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {HeroesDetailsComponent} from './heroes-details/heroes-details.component'

const routes: Routes = [
  { path: '', redirectTo:'dashboard',pathMatch:'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroesDetailsComponent },
  { path: 'dashboard', component: DashboardComponent }
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports:[
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule {
}

