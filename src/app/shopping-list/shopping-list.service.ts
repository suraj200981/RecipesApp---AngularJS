import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    //we have to use this becuase our array is sliced
    newIngredientsAdded = new EventEmitter<Ingredient[]>();
    
 private ingredients : Ingredient[] = [
     new Ingredient("Apples", 5),
     new Ingredient("Tomatoes", 10)
  ];


    //getter
    getIngredients(){
        //the .slice method returns a copy of the array so that the original array is not modified
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.newIngredientsAdded.emit(this.ingredients.slice());
    }


    addIngredients(ingredients: Ingredient[]){
        //for each ingredient in the array
        //add it to the ingredients array
        //emit the new ingredients array
        //for(let ingredient of ingredients){
        //  this.addIngredient(ingredient);
        //}
        this.ingredients.push(...ingredients);//ES6 spread operator feature to add multiple items to an array
        this.newIngredientsAdded.emit(this.ingredients.slice());
    }

 
}