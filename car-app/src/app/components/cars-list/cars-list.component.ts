import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit{

  carsArray: Car[] = []

  ascOrDsc: string = 'ascending'

  constructor(private readonly carsService: CarService){}

  ngOnInit(): void {
    this.carsArray = this.carsService.getAllCars()

    this.carsService.rentedCars.subscribe((data)=> {
      this.carsArray = data
    })

    this.carsService.availableCars.subscribe((data)=> {
      this.carsArray = data
    })

    this.carsService.resetedCars.subscribe((data)=> {
      this.carsArray = data
    })

  }



}
