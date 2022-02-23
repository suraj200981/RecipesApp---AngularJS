import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //providers: [ShoppingListService] i have provided the service in the app module so that it is available to the recipe section
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient [];
  //injecting the shoping list service into the shopping list component
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    //subscribe to the event emitter and stream data
    this.shoppingListService.newIngredientsAdded.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
