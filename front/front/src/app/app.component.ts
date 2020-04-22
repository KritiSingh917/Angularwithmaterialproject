import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from './login/user';
import { RegisterService } from './login/register.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static authenticateBySession() {
    throw new Error("Method not implemented.");
  }
  title = 'StyleMe';
  loggedUser: User;
  hide = true;
  show = false;
  display = false;
  flag=false;
  fl=false;
  name:string;
  show_wel:boolean=true
  poster_show:boolean;
  constructor( private router: Router, private registerService: RegisterService) {
    this.router.navigate(['/dashboard']);
}
  userId;
  ngOnInit() {
    this.userId=sessionStorage.getItem('uEmail');
  }
  call()
  {
    this.router.navigate(['home']);
  }
  sellerfun(){
    this.router.navigate(['Seller']);
  }
logout() {
  this.show_wel=true
  sessionStorage.clear();
  this.loggedUser = null;
  this.userId='';
  this.router.navigate(['home']);
  this.fl=false;
}

  ngDoCheck(): void {
  this.loggedUser = new User();
  this.loggedUser.uCredentials.uEmail = sessionStorage.getItem('uEmail');
  this.loggedUser.uCart = JSON.parse(sessionStorage.getItem('uCart'));
  }

  hideContent() {
    this.hide = false;
    this.show = true;
    this.show_wel=false
  //  this.authenticateBySession();
  }

  showContent() {
    this.hide = true;
    this.show = false;
  }

  searchProducts(searchKey) {
    console.log(searchKey+"app");
    this.flag=true;
  
  }
authenticateBySession() {
  const  loggedEmail = sessionStorage.getItem('uEmail');
  this.fl=true;
  this.name=sessionStorage.getItem('uName');
  if (loggedEmail) {
    this.registerService.getUserDetail(loggedEmail).subscribe(
      res => {
        this.loggedUser = res;
      },
      err => {this.loggedUser = null; }
    );

  } else {
    this.loggedUser = null;
  }

  this.userId=sessionStorage.getItem('uEmail');
  this.router.navigate(['/home']);


}
}
