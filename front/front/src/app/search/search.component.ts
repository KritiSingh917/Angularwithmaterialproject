import { Component, OnInit, Input } from '@angular/core';
import { searchService } from './search.service';
import { ActivatedRoute } from '@angular/router';
import { UriService } from '../uri.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
 // @Input()
  searchKey:string;

  successMsg:string;
  errorMsg:string;
  prods:any[];
  prodlist:any[]=[];

  constructor(private vs:searchService, private router:Router, private route:ActivatedRoute, private UriService: UriService) { }

  ngOnInit() {
    this.searchprod();
    this.searchKey=this.route.snapshot.paramMap.get('searchKey');
    
}
  searchprod() {
    this.vs.search(this.searchKey)
    .subscribe( 
      (good) => {
        this.prods=good;
        for(let i=0;i<this.prods.length;i++)
        {
          if(this.prods[i].pName.includes(this.searchKey)==true)
          {
            this.prodlist.push(this.prods[i]);
          }
        }
      }, 
      (bad) => {
        this.errorMsg=bad.error.message;
        
      })
  }

  displayproduct(item)
  {
    sessionStorage.setItem('item',item);
    this.UriService.storage = item;
    this.router.navigate(['/productdetails']);
  }
  }

