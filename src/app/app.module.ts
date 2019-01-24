import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlanetsListComponent} from './components/planets-list/planets-list.component';
import {PlanetDetailsComponent} from './components/planet-details/planet-details.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LinkPipe} from './pipes/link.pipe';
import {PopulationPipe} from './pipes/population.pipe';
import {StoreModule} from '@ngrx/store';
import {planetsReducer} from './store/reducers/planet.reduer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetDetailsComponent,
    PageNotFoundComponent,
    LinkPipe,
    PopulationPipe
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({planets: planetsReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
