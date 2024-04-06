import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/interfaces/Register';
import { RegisterUserService } from 'src/app/services/registerUser/register-user.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {

    registerWasClicked: boolean = false;
    showModal: boolean = true;
    usernameTaken: boolean = false;
    emailTaken: boolean = false;

    registerForm: Register = {} as Register; // Initializing an empty object

    // Constructor where I can inject the class
    // that will be responsible for making the HTTP requests
    constructor(private registerService: RegisterUserService) {
    }

    // FormGroup Object that contains the individual FormGroup objects
    // each one representing a control of my Sign In form
    signInFormGroup = new FormGroup(
        {
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(3)
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.email,
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6)
                // TODO It would be a good idea to insert more password validations later!
            ]),
            repeatedPassword: new FormControl('', [
                Validators.required,
                Validators.minLength(6)
            ])
        }
    );

    // Gets called
    closeModal(closeModal: boolean): void {
        this.showModal = closeModal;
    }

    // Checks if the passwords are the same
    doPasswordsMatch(): boolean {
        return this.signInFormGroup.value.password === this.signInFormGroup.value.repeatedPassword;
    }

    // Method that will be called when a user attemps to register on the site
    saveUser() {

        // Ensures the error messages will only appear after the register button is activated
        this.registerWasClicked = true;

        // Copies the formGroup's value to an object with a proper type (Register type)
        Object.assign(this.registerForm, this.signInFormGroup.value);

        // Deletes the repeatedPassword from the object Register
        delete this.registerForm['repeatedPassword'];

        // Cheking if the form is valid and the passwords match
        if (this.signInFormGroup.valid && this.doPasswordsMatch()) {

            // Clears the errors from the screen between each register attempt
            this.usernameTaken = false;
            this.emailTaken = false;

            // Calls the post method on the service
            this.registerService.post(this.registerForm).subscribe(
                {
                    next: () => {
                        this.showModal = true;
                    },
                    error: (err) => {
                        if(err.error.error === "Username already registered") this.usernameTaken = true;
                        if(err.error.error === "Email already registered") this.emailTaken = true;
                    }
                }
            );

        }

    }


    // Getters to access each individual control from signInFormGroup
    // so it can check for/show errors on the template
    get username(): any {
        return this.signInFormGroup.get('username');
    }

    get email(): any {
        return this.signInFormGroup.get('email');
    }

    get password(): any {
        return this.signInFormGroup.get('password');
    }

    get repeatedPassword(): any {
        return this.signInFormGroup.get('repeatedPassword');
    }

}
