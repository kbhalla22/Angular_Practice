import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[ ]=[
    new Recipe('A test Recipe','This is simply a test','https://images.app.goo.gl/zK7m4BSsZTF8rq4L9')
  ];

  constructor() { }

  ngOnInit(): void {
  }
onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
}
}
