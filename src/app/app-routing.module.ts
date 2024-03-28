import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { RecipeDisplayComponent } from './components/recipe-display/recipe-display.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "articles", component: ArticlesComponent },
    { path: "about-us", component: AboutUsComponent },
    { path: "login", component: LoginComponent },
    { path: "sign-in", component: SigninComponent },
    { path: "search-recipes", component: SearchRecipeComponent},
    { path: "recipes/:id", component: RecipeDisplayComponent},
    { path: "", redirectTo: "home", pathMatch: "full" },      // empty routes
    { path: "**", redirectTo: "home", pathMatch: "full" }     // TODO change to a 404page later; routes that don't exist
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
