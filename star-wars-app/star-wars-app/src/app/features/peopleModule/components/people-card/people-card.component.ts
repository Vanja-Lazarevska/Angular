import { Component, Input } from '@angular/core';
import { Person } from 'src/app/features/peopleModule/interfaces/people.interface';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent {

  @Input()
  onePerson: Person
}
