import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { ViewCatalog } from '../shared/ViewCatalog';
import { UriService } from '../uri.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  prodToBeSearched: string;

  categorySelected: string;
  errorMessage: string;
  slideShow: boolean;
  productShow: boolean;
  ViewCatalogs: any;
  successMessage: String;
  show: boolean;
  prod:any[];
 
 
  constructor(private UriService: UriService,private route: ActivatedRoute,
    private router: Router) { 
    
    }
  userId;
  
 
  categories = ['Clothing', 'Shoes', 'make-up', 'home-decor','books'];
  ngOnInit() {
    this.slideShow = true;
    }

  viewProductBy(category)
  {
 
    this.productShow = true;
    this.ViewCatalogs =null;
    this.successMessage = null;
    this.errorMessage = null;
    this.UriService.view(category)
    .subscribe(
      response => {
        this.ViewCatalogs = response;
      }, err => {
        this.errorMessage = err.error.message
      });
  }
  routepage(value) {
    this.UriService.storage = value;
    this.router.navigate(['/productdetails'])
  }
}
