import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  lowerName: string = 'emerson'
  upperName: string = 'EMERSON'
  fullName: string = 'EmErSoN cABreRa'

  currentDate: Date = new Date()

}
