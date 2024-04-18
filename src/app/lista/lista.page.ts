import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

  getRecipeImage(recipeId: number): string {
    // Here, you can define logic to return the image path based on the recipe ID
    // For example, if you have images named by recipe ID, you can return the path like this:
    return `assets/resources/recipe_${recipeId}.png`;
  }

}
