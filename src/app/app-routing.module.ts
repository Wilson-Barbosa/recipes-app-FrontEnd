import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "articles", component: ArticlesComponent},
    {path: "about-us", component: AboutUsComponent},
    {path: "login", component: LoginComponent},
    {path: "sign-in", component: SigninComponent},
    {path: "", redirectTo: "home", pathMatch: "full"},      // empty routes
    {path: "**", redirectTo: "home", pathMatch: "full"}     // routes that don't exist
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
