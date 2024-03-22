import { Component, Input, Output } from '@angular/core';
import { IndividualRecipeFromList } from 'src/app/interfaces/IndividualRecipeFromList';
import { HttpRecipeService } from 'src/app/services/httpRecipe/http-recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

    // Injecting the HttpService
    constructor(private recipeService: HttpRecipeService) { }

    // Array that contains a list of recipes from the database
    recipeList: IndividualRecipeFromList[] = [];

    errorOnRequest!: boolean;       // Controls if an error message will be display or not
    isResponseEmpty!: boolean;      // Display a no results found on template
    numberOfResults: number = 0;    // Indicates the amount of recipes fetched


    public displayAll(): void {

        // These four lines reset all messages and the RecipeList[] before each new search
        this.errorOnRequest = false;
        this.isResponseEmpty = false;
        this.numberOfResults = 0;
        this.recipeList = [];

        // Calls the HTTP method on Service
        this.recipeService.getAllRecipes().subscribe(
            {
                next: (data) => {
                    // Assigns the response to recipeList[]
                    this.recipeList = data;
                    this.numberOfResults = data.length;

                    // If there are no results (array empty), but the request was successfull
                    if (this.recipeList.length == 0) {
                        this.isResponseEmpty = true;
                    }
                },
                error: () => { // error on the request
                    this.errorOnRequest = true;
                }
            }
        );
    }

}
