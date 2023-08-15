import { Component } from '@angular/core';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent {

  constructor(private readonly carsService: CarService){}


  onShowRented = () => {
   this.carsService.handleShowRented()
  }

  onShowAvailabe = () => {
    this.carsService.handleShowAvailable()

  }

  onReset = () => {
    this.carsService.handleReset()
  }

}
