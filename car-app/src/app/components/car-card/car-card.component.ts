import { Component, Input } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {

  constructor(private readonly carService: CarService){}

  @Input()
  car: Car = {} as Car

  onRentClick(carId: number) {
    console.log(carId)
    this.carService.handleRentCar(carId)
  }

  onReturnTheCarClicked(carId: number) {
    console.log(carId)
    this.carService.handleReturnCar(carId)
  }

}
