import { Injectable } from '@angular/core';
import { StarWarsRepositoryService } from './star-wars-repository.service';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private readonly starWarsRepository: StarWarsRepositoryService) { }

  getStarWarsPeople () {
    return this.starWarsRepository.getAllPeople()
}
}
