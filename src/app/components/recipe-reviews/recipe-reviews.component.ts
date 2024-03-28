import { Component, Input, OnInit } from '@angular/core';
import { ReviewResponse } from 'src/app/interfaces/ReviewResponse';

@Component({
    selector: 'app-recipe-reviews',
    templateUrl: './recipe-reviews.component.html',
    styleUrls: ['./recipe-reviews.component.css']
})
export class RecipeReviewsComponent {

    // The attribute reviews gets its value from
    // a recipe Component
    @Input() reviews!: ReviewResponse[];

    


}
