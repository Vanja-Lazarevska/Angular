import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeopleData } from '../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class StarWarsRepositoryService {

  URL = ' https://swapi.dev/api/people'
  constructor(private readonly httpClient:HttpClient) {}

   getAllPeople () {
    return this.httpClient.get<PeopleData>(this.URL)
  }
}
