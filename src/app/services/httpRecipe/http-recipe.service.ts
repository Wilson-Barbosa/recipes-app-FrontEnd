import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndividualRecipeFromList } from 'src/app/interfaces/IndividualRecipeFromList';

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

}
