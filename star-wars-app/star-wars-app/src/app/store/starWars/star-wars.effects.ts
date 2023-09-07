import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { Person, PersonFromDb } from "src/app/features/peopleModule/interfaces/people.interface";
import { StarWarsService } from "src/app/features/peopleModule/services/star-wars.service";
import { fetchPeople, fetchPeopleSuccess } from "./star-wars.actions";


@Injectable()
export class StarWarsEffect  {

    constructor(private readonly actions$: Actions, private readonly starWarsService: StarWarsService){}


    fetchPeople$ = createEffect(() => 
    this.actions$.pipe(
        ofType(fetchPeople),
        switchMap(() => this.starWarsService.getStarWarsPeople().pipe(
            map((data)=>{
            const people: Person[] = data.results.map((person: PersonFromDb) => {
                return {
                    fullName: person.name,
                    gender: person.gender,
                    birthYear:  person.birth_year,
                    height:  person.height,
                    mass: person.mass
            }
            }) 

            return fetchPeopleSuccess({people: people})
        })
        )
        )
    )
    )
}