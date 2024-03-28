import { Author } from "./Author";
import { ReviewResponse } from "./ReviewResponse";

export interface SingleRecipe {
    author: Author;
    title: string;
    photo: string;
    rating: number;
    cookTime: number;
    createdAt: Date;
    directions: string;
    ingredients: string[];
    tags: string[];
    reviews: ReviewResponse[];
}