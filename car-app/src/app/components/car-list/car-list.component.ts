import { Component, Input} from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {

@Input()
carsFromParent: Car[] = []


actualArray : Car[] = []
arrayFromChild : boolean = false


onCarRented(carId: number) {
  this.carsFromParent = this.carsFromParent.map((car) => {
    if(car.id === carId && car.isRented === false) {
      return {
        ...car,
        isRented: true
      }
    }

    return car
  })
}

onCarReturned(carId: number){
  this.carsFromParent = this.carsFromParent.map((car) => {
    if(car.id === carId && car.isRented === true){
      return {
        ...car,
        isRented: false
      }
    }

    return car
  })

 
    
}

onShowRented(value: Car[]) {
  this.actualArray = value
  this.arrayFromChild = true 
}

onShowAvailable(value: Car[]){
  this.actualArray = value
  this.arrayFromChild = true 

 
}

onReset(value: Car[]){
  this.arrayFromChild = true 
  this.actualArray = value
}

}
