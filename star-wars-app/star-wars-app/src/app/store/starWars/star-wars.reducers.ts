import { createReducer, on } from "@ngrx/store";
import { Person } from "src/app/features/peopleModule/interfaces/people.interface";
import { fetchPeopleSuccess } from "./star-wars.actions";



export interface starWarsState {
    people: Person[]
} 

export const initialState: starWarsState  = {
    people: []
}

export const starWarsReducer = createReducer(
    initialState,
    on(fetchPeopleSuccess, ((state, payload)=> {
        return {
            ...state,
            people: payload.people
        }
    }))
)