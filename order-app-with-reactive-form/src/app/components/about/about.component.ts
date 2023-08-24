import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title: string = 'About us'
  about: string = 'Our application Order before you get Older is an application in wich you can find everything that you wished for in one place.'
  creator: string = 'The application is created by John Doe for the purpose of helping people find everything they need by sitting on their couch.'

}
