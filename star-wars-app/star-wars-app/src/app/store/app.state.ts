import { ActionReducerMap } from "@ngrx/store";
import { starWarsReducer, starWarsState } from "./starWars/star-wars.reducers";


export interface AppState  {
    people: starWarsState,

}

export const AppReducer: ActionReducerMap<AppState>  = {
    people: starWarsReducer,
}