import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  randomRecipe : Recipe | undefined;


  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit() {
    this.getRandomRecipe();
  } 

  getRandomRecipe(){
    const recipes = this.recipeService.getAllRecipes();
    const randomIndex = Math.floor(Math.random() * recipes.length);
    this.randomRecipe = recipes[randomIndex];
  }
    
  getRecipeImage(recipeId: number): string {
    return `assets/resources/recipe_${recipeId}.png`;
  }

  navigateToDetails(recipeId: number) {
    console.log(recipeId);
      this.router.navigate(['/detalhe', recipeId]);
  }

}

