import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {

  public isUpperCase: boolean = false
  public orderBy: keyof Hero | '' = ''

  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Daredavil', canFly: false, color: Color.red },
    { name: 'Robin', canFly: false, color: Color.yellow },
    { name: 'Linterna Verde', canFly: true, color: Color.green },
    { name: 'Thor', canFly: true, color: Color.blue },
    { name: 'Ironman', canFly: false, color: Color.red },
    { name: 'Hulk', canFly: false, color: Color.green },
    { name: 'Spiderman', canFly: true, color: Color.red },
    { name: 'Capitan America', canFly: false, color: Color.blue },
    { name: 'Aquaman', canFly: false, color: Color.orange },
    { name: 'Capitan Centella', canFly: false, color: Color.white },
    { name: 'Flash', canFly: false, color: Color.red },

  ]

  public toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }


  public changeOrderBy(orderBy: keyof Hero | ''): void {
    this.orderBy = orderBy
  }


}
