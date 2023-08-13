import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarCardComponent,
    FilterOptionsComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
