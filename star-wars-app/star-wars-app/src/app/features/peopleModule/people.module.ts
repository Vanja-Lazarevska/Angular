import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './components/people/people.component';
import { PeopleCardComponent } from './components/people-card/people-card.component';



@NgModule({
  declarations: [PeopleComponent, PeopleCardComponent],
  imports: [
    CommonModule,

  ]})
export class PeopleModule { }
