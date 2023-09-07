export interface PeopleData {
    count: number;
    next: string;
    previous: null,
    results: []
}

export interface PersonFromDb {
    birth_year: string
    created: string
    edited: string
    eye_color : string
    films : string[] 
    gender : string
    hair_color : string
    height : string
    homeworld : string
    mass : string
    name : string
    skin_color : string
    species : []
    starships : string[]
    url : string
    vehicles : string[]
}




export interface Person {
    fullName: string
    gender: string
    birthYear : string
    height : string
    mass : string
}