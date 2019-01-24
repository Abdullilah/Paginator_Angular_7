import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanetsListComponent} from './components/planets-list/planets-list.component';
import {PlanetDetailsComponent} from './components/planet-details/planet-details.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'planets', pathMatch: 'full'},
  {path: 'planets/:name', component: PlanetDetailsComponent, pathMatch: 'full'},
  {
    path: 'planets',
    component: PlanetsListComponent,
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
