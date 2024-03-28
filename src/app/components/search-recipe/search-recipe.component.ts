import { Component, ViewChild } from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';

@Component({
    selector: 'app-search-recipe',
    templateUrl: './search-recipe.component.html',
    styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent {

    searchInput: string = '';       // Captures the words to be searched
    showResultsTitle: boolean = false;   // Display the result title


    // TODO I need to refactor this later
    @ViewChild(RecipeListComponent)
    recipeList!: RecipeListComponent;


    // Method called when the user clicks on 'Display All Recipes'
    public executeDisplayAllOnList(): void {
        this.showResultsTitle = true;
        this.recipeList.displayAll();
    }

    // Method called by the user when it clicks on "Search"
    public sendKeywordToSearch(): void {
        // Only gets executed if the string is not empty
        if (this.searchInput != '') {
            this.showResultsTitle = true;
            this.recipeList.getMatchingRecipes();
        }
    }

}
