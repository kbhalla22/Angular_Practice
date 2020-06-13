import { Component, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { string } from 'prop-types';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild ('nameInput',{static:false})nameInputRef :  ElementRef;
@ViewChild ('amountInput',{static:false})amountInputRef :  ElementRef;
ingredientAdded=new EventEmitter<{name:string,amount:number}>();
  constructor() { }

  ngOnInit(): void {
  }
onAddItem(){
  const 
const newIngredient =new Ingredient(this.nameInputRef.nativeElement.value);
}
}
