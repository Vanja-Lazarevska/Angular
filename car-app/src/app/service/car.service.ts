import { EventEmitter, Injectable } from '@angular/core';
import { CARS } from '../db/car.db';
import { Car } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private _cars: Car[] = CARS

  rentedCars = new EventEmitter<Car[]>()

  availableCars = new EventEmitter<Car[]>()

  resetedCars = new EventEmitter<Car[]>()

  constructor() { }

  getAllCars = () => {
    return this._cars
  }

  handleRentCar = (carId: number) => {
    this._cars.map((car)=> {
      if(car.id === carId && !car.isRented ) {
        car.isRented = true  
      }
      return car
    })

  }

  handleReturnCar = (carId: number) => {
    this._cars.map((car)=> {
      if(car.id === carId && car.isRented) {
        car.isRented = false
      }
      return car
    })
  }

  handleShowRented = () => {
    const rentedCars = this._cars.filter((car)=> car.isRented)

    this.rentedCars.emit(rentedCars)

  }

  handleShowAvailable = () => {
    const availableCars = this._cars.filter((car)=> !car.isRented)

    this.availableCars.emit(availableCars)

  }

  handleReset = () => {
    this.resetedCars.emit(this._cars)
  }
}
