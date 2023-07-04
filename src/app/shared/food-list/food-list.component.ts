import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.sass']
})
export class FoodListComponent {

  public foodList: Array<string> = []

  constructor (private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList();

    this.foodListService.emitEvent.subscribe(
      {next: (res: string) => alert(`Você adicionou ${res} na lista.`)}
    );
  }
}
