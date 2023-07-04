import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HeaderComponent } from './header/header.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FoodAddComponent,
    FoodListComponent,
  ],
  exports: [
    HeaderComponent,
    FoodAddComponent,
    FoodListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
