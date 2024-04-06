import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from 'src/app/interfaces/Register';

@Injectable({
    providedIn: 'root'
})
export class RegisterUserService {

    // Url used to make the requests
    baseUrl: string = "http://localhost:8080/api/v1/auth/users/register";

    constructor(
        private httpRequest: HttpClient // Injects the httpClient
    ){}

    // Make a POST request to my server
    // TODO I need to change this method later, adding the observable type
    post(registerForm: Register){
        return this.httpRequest.post(this.baseUrl, registerForm);
    }

}
