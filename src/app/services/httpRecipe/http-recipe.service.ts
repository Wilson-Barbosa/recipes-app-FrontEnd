import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeList } from 'src/app/interfaces/RecipeList';
import { SingleRecipe } from 'src/app/interfaces/SingleRecipe';

@Injectable({
    providedIn: 'root'
})
export class HttpRecipeService {

    // Injecting HttpClient
    constructor(private http: HttpClient){}

    // Base URL for HTTP requests
    baseURL:string = "http://localhost:8080/api/v1/recipes";

    // Gets all recipes from the database
    public getAllRecipes(): Observable<RecipeList[]> {
        return this.http.get<RecipeList[]>(this.baseURL);
    }

    // Gets a single recipe by it's id
    public getRecipe(id: number): Observable<SingleRecipe>{
        return this.http.get<SingleRecipe>(`${this.baseURL}/${id}`);
    }

    // Get a List of Recipes that match the parameter given (exactly or not)
    public getMatchingRecipes(keyword: string): Observable<RecipeList[]> {
        return this.http.get<RecipeList[]>(`${this.baseURL}/search?keyword=${keyword}`);
    }

}
