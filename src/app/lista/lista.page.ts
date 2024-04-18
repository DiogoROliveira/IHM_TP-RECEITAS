import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  recipes: Recipe[] = [];

  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

  getRecipeImage(recipeId: number): string {
    return `assets/resources/recipe_${recipeId}.png`;
  }

  navigateToDetails(recipeId : number){
    this.router.navigate(['/detalhe', recipeId]);
  }

}
