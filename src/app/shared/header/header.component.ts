import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  public imageUrl: string = '../../assets/currency.png'

  public title: string = 'Currency Exchanger'
}
