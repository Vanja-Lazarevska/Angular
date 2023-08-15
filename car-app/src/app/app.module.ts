import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';
import { FormsModule } from '@angular/forms';
import { ModelFormatPipe } from './pipes/model-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarCardComponent,
    FilterOptionsComponent,
    ModelFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
