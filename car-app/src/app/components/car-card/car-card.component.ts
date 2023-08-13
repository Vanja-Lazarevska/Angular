import { Component, Input , EventEmitter, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {

  @Input()
  carFromGrandParent: Car = {id: 2, model: '', priceToRent: 2, yearOfProduction: '', engineType:'', image:'', isRented: true}

  @Output()
  rentTheCar: EventEmitter<number> = new EventEmitter<number>()

  onRentClick(carId: number) {
    this.rentTheCar.emit(carId)

  }

  @Output()
  returnTheCar: EventEmitter<number> = new EventEmitter<number>()

  onReturnTheCarClicked(carId: number) {
    this.returnTheCar.emit(carId)

  }
}
