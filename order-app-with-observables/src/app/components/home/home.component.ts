import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  welcomeMessage: string = 'Welcome to'
  orderAppName: string = 'Order before you get Older'

}
