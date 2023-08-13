import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent implements OnInit{

  copy: Car[] = []

  ngOnInit(): Car[] {
    this.copy = [...this.arrayOfCars]
    return this.copy
  
  }

  @Input()
  arrayOfCars: Car[] = []

  @Output()
  rentedCars: EventEmitter<Car[]> = new EventEmitter<Car[]>()

  @Output()
  availableCars: EventEmitter<Car[]> = new EventEmitter<Car[]>()

  @Output()
  resetAllCars: EventEmitter<Car[]> = new EventEmitter<Car[]>()


  handleShowRented() {
    const arrayOfRentedCars = this.arrayOfCars.filter((car) => car.isRented === true)
    this.rentedCars.emit(arrayOfRentedCars)

  }

  handleShowAvailabe() {
    const arrayOfAvailableCars = this.arrayOfCars.filter((car) => car.isRented === false)
    this.availableCars.emit(arrayOfAvailableCars)
  }

  handleReset() {
    this.resetAllCars.emit(this.copy)
  }

}
