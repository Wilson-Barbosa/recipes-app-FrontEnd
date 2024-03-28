import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewResponse } from 'src/app/interfaces/ReviewResponse';
import { SingleRecipe } from 'src/app/interfaces/SingleRecipe';
import { HttpRecipeService } from 'src/app/services/httpRecipe/http-recipe.service';

@Component({
    selector: 'app-recipe-display',
    templateUrl: './recipe-display.component.html',
    styleUrls: ['./recipe-display.component.css']
})
export class RecipeDisplayComponent implements OnInit {

    // Injecting services via constructor
    constructor(
        private httpRecipe: HttpRecipeService,
        private route: ActivatedRoute
    ){}

    recipe!: SingleRecipe;      // Attribute that holds the information of a Recipe

    recipeId!: number;          // Parameter to search for a recipe

    reviews!: ReviewResponse[]; // ReviewsResponseArray that is sent to the child component


    // This hook is called when the route with an ID is matched
    ngOnInit(): void {

        // Accessing the route and retrieving the value from id
        // it needs to be converted to number type, as it's a string originally
        this.recipeId = Number(this.route.snapshot.paramMap.get('id'));

        // Calling the service to perform the HTTP GET request
        this.httpRecipe.getRecipe(this.recipeId).subscribe({
            next: (data) => {

                // Parsing the String to Date type
                data.createdAt = new Date(data.createdAt);

                // Assigning the parsed data retrieved to my Recipe Attribute
                this.recipe = data;

                // Then I send (via input) the reviews of my response to RecipeReviewComponent
                this.reviews = data.reviews;
            },
            error: () => {alert("There was an error")} // TODO change this later
        });
    }
}
