import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  
  constructor(private recipeService: RecipeService) {

   }

  ngOnInit() {
    //getting recipes from the recipe service, this replaces the need to loop through the array in the template
    this.recipes = this.recipeService.getRecipes();
  }


}
