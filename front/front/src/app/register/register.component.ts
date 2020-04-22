import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { registerService } from './Register.service';
import { Route, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  successMsg:string;
  errorMsg:string;
  registerForm:FormGroup;

  constructor(private rf:FormBuilder, private rs:registerService,private route: Router) { }

  ngOnInit() {
    this.registerForm=this.rf.group({
      uName: ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z" "]*')]],
      uDOB: ['', [Validators.required, dobvalidate]],
      uPhone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      uEmail: ['', [Validators.required, emailvalidation]],
      uPass: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.minLength(8)]],
    })
  }

  register()
  {
    console.log("yes");
    this.successMsg="";
    this.errorMsg="";
    this.rs.registerUser(this.registerForm.value)
    .subscribe( 
      (good) => {
        this.successMsg=good.message;
        this.route.navigate(['/login']);
      }, 
      (bad) => {
        this.errorMsg=bad.error.message;
      })
  }
 }

function dobvalidate(c: FormControl)
{
  var cdate=new Date();
  console.log(c.value);
  console.log(typeof(c.value));
  var userdate=new Date(c.value);
  //this.userdate=this.userdate
  console.log(userdate+" "+cdate);
  if(cdate<userdate)
    return { doberror : {message: "Enter a valid date of birth"} };
  else
    return null;
}

function emailvalidation(c: FormControl)
{
  console.log(c.value)
  if(c.value.match(/^\w+([\.-_]?\w+)*@\w+[.][(com)|(co.in)]+$/))
  {
    console.log("Wrong");
    return null;
  }
  else{
 
    return { emailidError : {message: "Enter a valid email id"} };
  }
}

