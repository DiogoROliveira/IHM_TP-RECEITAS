import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

   recipe: Recipe | undefined;

  constructor(private route : ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    const recipeId = +this.route.snapshot.paramMap.get('id')!;
    if (recipeId) {
      this.recipe = this.recipeService.getRecipeById(recipeId);
      console.log('Recipe:', this.recipe);
    }
  }

  getRecipeImage(recipeId: number): string {
    return `assets/resources/recipe_${recipeId}.png`;
  }


}
