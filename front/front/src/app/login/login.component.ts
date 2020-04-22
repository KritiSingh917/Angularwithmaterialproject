import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Routes, Router } from '@angular/router';
import { RegisterService } from './register.service';
import { Credentials } from './user';
import { AppComponent } from '../app.component'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: any;
 
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router, private obj: AppComponent) {
  
   }
  errorMessage: string;
  successMessage: string;
  loginForm: any;
  user_logged_in:boolean=false;
  hide = true;
 
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+[0-9]{3}$/)]);

  getErrorMessage(field) {
    if (field === 'email') {
      return this.email.hasError('required') ? 'Email Required' :
        this.email.hasError('pattern') ? 'Not a valid email' :
          '';
    } else if (field === 'password') {
      return this.password.hasError('required') ? 'Password Required' :
        this.password.hasError('pattern') ? 'Not a valid password' :
          '';
    }
  }

  show_wel:boolean
  ngOnInit() {
    
  }
  poster_show:boolean=false
  login() {
    this.show_wel=false
    this.poster_show=false
    this.loginForm = {
      email: this.email.value,
      password: this.password.value
    };
    this.registerService.login(this.loginForm).subscribe(
      (response) => {
        console.log(response[0].uCredentials.uEmail)
        sessionStorage.setItem('uEmail', response[0].uCredentials.uEmail);
        sessionStorage.setItem('uName',response[0].uProfile.uName);
        this.name=response[0].uProfile.uName;
        const productId = sessionStorage.getItem('productId');

        if (productId != null) {
             this.router.navigate([`/productDetail/${productId}`]);
           } else {
              this.router.navigate(['/dashboard']);
             this.obj.authenticateBySession();
            this.successMessage="Successfully logged In"
           }
      },
      (errorResponse) => {
           const errorStatus = errorResponse.status;

            if (errorStatus === 404) {
                this.errorMessage = 'The username and password entered is incorrect!!'
                } else {
                 this.errorMessage = 'The password entered is incorrect!!';
                 }
                this.router.navigate(['/login']);
                 sessionStorage.clear();
                  
            }
           
    );

  }

}



