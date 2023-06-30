import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit {
  public title: string = 'Aprendendo Angular'

  constructor () {}

  ngOnInit(): void {

  }

}
