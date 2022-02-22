import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

//managing recipes with recipes service

export class RecipeService {
    //this is the recipe that the user has clicked on in recipe item
    recipeSelected = new EventEmitter<Recipe>();

    //you cannot directly access this array from the outside, unless you are using the getRecipes() method
    private recipes: Recipe[] =[
        new Recipe("A test recipe", "this is a description", "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg" ),
        new Recipe("Fruit Salad", "Description for fruit salad", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg" )
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    
}