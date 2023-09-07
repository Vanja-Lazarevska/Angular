import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';



@NgModule({
  declarations: [HomeComponent, NavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent]
})
export class CoreModule { }
