import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  //@Output() ingredientAdded = new EventEmitter<Ingredient>(); we have service now

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  addToList(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
  //  this.ingredientAdded.emit(newIngredient); we have service now
    this.shoppingListService.addIngredient(newIngredient);//adding ingredient with service

  }

}
