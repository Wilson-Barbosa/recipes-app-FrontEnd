import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndividualRecipeFromList } from 'src/app/interfaces/IndividualRecipeFromList';
import { SingleRecipe } from 'src/app/interfaces/SingleRecipe';

@Injectable({
    providedIn: 'root'
})
export class HttpRecipeService {

    // Injecting HttpClient
    constructor(private http: HttpClient){}

    // Base URL for HTTP requests
    url:string = "http://localhost:8080/recipes";

    // Gets all recipes from the database
    public getAllRecipes(): Observable<IndividualRecipeFromList[]> {
        return this.http.get<IndividualRecipeFromList[]>(this.url);
    }

    // Gets a single recipe by it's id
    public getRecipe(id: number): Observable<SingleRecipe>{
        return this.http.get<SingleRecipe>(`${this.url}/${id}`);
    }

}
