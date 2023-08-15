import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interfaces/car.interface';

@Pipe({
  name: 'modelFormat'
})
export class ModelFormatPipe implements PipeTransform {

  transform(value: Car[], ascOrDes: string)  {

    if(ascOrDes === 'ascending') {

      return value.sort((car1, car2) => car1.model < car2.model ? -1 : 1)
    } 
    
    else if(ascOrDes === 'descending') {
      return value.sort((car1, car2) => car1.model < car2.model ? 1 : -1)
    }
    else {
      return value
    }
      

}
}
