import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

//managing recipes with recipes service

export class RecipeService {
    //this is the recipe that the user has clicked on in recipe item
    recipeSelected = new EventEmitter<Recipe>();

    //you cannot directly access this array from the outside, unless you are using the getRecipes() method
    private recipes: Recipe[] =[
        new Recipe("Chicken & halloumi burger", "Look no further than these chicken and halloumi burgers", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/15-minute-chicken-halloumi-burgers-7dda022.jpg?quality=90&webp=true&resize=300,272" 
        , [
            new Ingredient("Skinless chicken breats", 2),
            new Ingredient("Halloumi", 1),
            new Ingredient("Bread", 1),
            new Ingredient("Mustard", 1),
            new Ingredient("Lettuce", 1),
            new Ingredient("Tomato", 1),
            new Ingredient("Bacon", 1)
        ]),
        new Recipe("Pan-fried salmon", "Have a perfectly cooked salmon fillet, complete with crisp skin...", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salmon-1547b3f.jpg?quality=90&webp=true&resize=300,272",
        [
            new Ingredient("Salmon", 1),
            new Ingredient("Butter", 1),
            new Ingredient("Green veg", 1),
            new Ingredient("Seasoning", 1)
        ])
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    
}