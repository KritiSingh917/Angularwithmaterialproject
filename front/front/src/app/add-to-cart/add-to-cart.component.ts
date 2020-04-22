import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UriService } from '../uri.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
 @Output()
 customevent:EventEmitter<any>=new EventEmitter()
  userId: string;
  items: any[] = [];
  errorMsg: string;
  amount: number = 0;
  tax = 0;
  totalamount = 0;
  successMessage = '';
  errorMessage = '';
  flag = true;
  ii;
  poster_show:boolean=false
  flag2 = false;
  matching:boolean = false;
  obj = { "productId": "", "sId": "", "maxQ": "" };
  myobjseller: any[] = [];
  constructor(private uriservices: UriService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log("on add to cart");
    this.matching = false;
    this.flag2 = false;
    this.viewitems();
  }

cart_number:number;
  viewitems() {
    this.userId = sessionStorage.getItem('uEmail');
    this.uriservices.viewcart(this.userId)
      .subscribe(
        (good) => {
          this.items = good;
          this.flag = true;
          this.flag2 = true;
          if (this.items == null)
            this.flag = true;
          else {
            this.calculateamount();
            this.getmaxquantity();
          }
         
        },
        (bad) => {
          
          this.errorMsg = bad.error.message;
        })
  }

  show_details:boolean=false
  show_detail_click(){
    this.show_details=true
  }
  getmaxquantity() {

    this.myobjseller = [];
    let myobj = ["", ""];
    for (let i = 0; i < this.items.length; i++) {
      let obj = { "productId": "", "sId": "", "maxQ": "" };
      obj.productId = this.items[i].productId;
      obj.sId = this.items[i].sId;
      this.myobjseller.push(obj);
      
    }
    

    this.uriservices.getsellerquantity(this.myobjseller).subscribe(
      (good) => {
       for(let i=0;i<this.myobjseller.length;i++)
       {
            this.myobjseller[i].maxQ = good[i];
            this.items[i].maxQ = good[i];
       }
       this.flag=false;
      },
      (bad) => {
      
      }
    )
  }

  deletetest(data) {
    this.uriservices.deletecartdata(data)
      .subscribe(
        (good) => {
          this.successMessage = "Deleted SuccessFully";
          this.ngOnInit();
        },
        (bad) => {
          this.errorMessage = "Could not Perform Your Request";
          this.ngOnInit();
        })

  }

  checkout() {
    this.flag = true;
   
    this.uriservices.checkout(this.items)
      .subscribe(
        (good) => {
          // console.log("checked out");
          this.successMessage = good.message;
          // console.log(good);
          this.router.navigate(['/order-history'])
        },
        (bad) => {
          this.errorMessage = bad.error.message;
        })
  }

  calculateamount() {
    this.amount = 0;
    this.tax = 0;
    this.totalamount = 0;
    this.matching = false;
    if (this.items != null) {

      this.items.forEach((i) => {
        this.amount += (i.price * i.pQuantity);
        if(i.pQuantity>i.maxQ)
        this.matching = true;
      });
    }
    this.tax = this.amount * 0.17;
    this.totalamount = this.amount+ this.tax;
    // console.log(this.amount, this.tax, this.totalamount);
  }
  checking(value) {
    this.calculateamount();

  }

}
