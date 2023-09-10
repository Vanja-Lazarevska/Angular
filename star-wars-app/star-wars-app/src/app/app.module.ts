import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppReducer } from './store/app.state';
import { StarWarsEffect } from './store/starWars/star-wars.effects';
import { CoreModule } from './core/core.module';
import { PeopleModule } from './features/peopleModule/people.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([StarWarsEffect]),
    CoreModule,
    PeopleModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
