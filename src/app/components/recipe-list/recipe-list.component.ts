import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
    sortingOption: string = '0';    // Controls the type of sorting in the list (it needs to be a string or else it won't work idk why)


    // Sorts the RecipeList based on user criteria
    public sortRecipes(): void {
        switch (this.sortingOption) {
            case '0': break;
            // title a-z
            case '1': this.recipeList.sort((a, b) => a.title.localeCompare(b.title)); break;
            // title z-a
            case '2': this.recipeList.sort((a, b) => b.title.localeCompare(a.title)); break;
            // rating 1-9
            case '3': this.recipeList.sort((a, b) => a.rating - b.rating); break;
            // rating 9-1
            case '4': this.recipeList.sort((a, b) => b.rating - a.rating); break;
            // time 0-9
            case '5': this.recipeList.sort((a, b) => a.cookTime - b.cookTime); break;
            // time 9-0
            case '6': this.recipeList.sort((a, b) => b.cookTime - a.cookTime);
        }
    }

    // Calls the service to request a list of recipes
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
