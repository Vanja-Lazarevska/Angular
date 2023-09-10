import { createReducer, on } from "@ngrx/store";
import { Person } from "src/app/features/peopleModule/interfaces/people.interface";
import { fetchPeople, fetchPeopleSuccess } from "./star-wars.actions";



export interface starWarsState {
    people: Person[],
    isFetching: boolean
} 

export const initialState: starWarsState  = {
    people: [],
    isFetching: false
}

export const starWarsReducer = createReducer(
    initialState,
    on(fetchPeople, ((state)=> {
        return {
            ...state,
            isFetching: true
        }
    })),
    on(fetchPeopleSuccess, ((state, payload)=> {
        return {
            ...state,
            people: payload.people,
            isFetching: false
        }
    }))
)