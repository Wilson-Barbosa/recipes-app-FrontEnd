import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderUserSectionComponent } from './components/header-user-section/header-user-section.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { RecipeDisplayComponent } from './components/recipe-display/recipe-display.component';
import { RelatedRecipesComponent } from './components/related-recipes/related-recipes.component';
import { RecipeReviewsComponent } from './components/recipe-reviews/recipe-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    SigninComponent,
    HeaderUserSectionComponent,
    AboutUsComponent,
    ArticlesComponent,
    FooterComponent,
    RecipeDisplayComponent,
    RelatedRecipesComponent,
    RecipeReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
