import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Person } from 'src/app/features/peopleModule/interfaces/people.interface';
import { AppState } from 'src/app/store/app.state';
import { fetchPeople } from 'src/app/store/starWars/star-wars.actions';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit{


  peopleArray : Person[]
  isFetching: boolean
  constructor(private readonly store: Store<AppState>){}

  ngOnInit(): void {

    this.store.dispatch(fetchPeople())

    this.store.select('people').subscribe((data)=> {
      this.peopleArray = data.people
    })

    this.store.select('people').subscribe((data)=> {
      this.isFetching = data.isFetching
    })


  }


}
