import { Component, OnInit, Input } from '@angular/core';
import { UriService } from '../uri.service';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
item:any[];
  constructor(private UriService: UriService,private route: ActivatedRoute,private router:Router) {
   this.item = this.UriService.storage;
   this.finalprice=this.item["price"]-(this.item["price"]*this.item["pSeller"]["pDiscount"]);
  }
 
  finalprice:number=0;
  sample: string;
  errorMessage :string;
  sub: any;
  ngOnInit() {
  }
  proceedtocart(item1){
    this.UriService.addtocart(item1)
      .subscribe(
        response => {
          this.sample = response.message;
        }, err => {
          this.errorMessage = err.error.message
        });
        this.router.navigate(['/cart']);

  }
  book(item1){
    this.UriService.checkout(item1)
      .subscribe(
        response => {
          this.sample = response.message;
        }, err => {
          this.errorMessage = err.error.message
        });

  }
  goback(){
    this.router.navigate(['/dashboard']);
    console.log("goback");
  }


}
