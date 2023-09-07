import { createAction, props } from "@ngrx/store";
import { Person } from "src/app/features/peopleModule/interfaces/people.interface";


const fetchPeopleName = '[People] Fetch People'
const fetchPeopleSuccessName = '[People] Fetch People Success'


export const fetchPeople = createAction(fetchPeopleName)

export const fetchPeopleSuccess = createAction(fetchPeopleSuccessName, props<{people: Person[]}>())