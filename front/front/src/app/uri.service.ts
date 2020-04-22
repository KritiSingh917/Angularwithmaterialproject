
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewCatalog } from './shared/viewcatalog';
import { Router } from '@angular/router';
@Injectable()
export class UriService {
    public storage: any;
    public storage1:any;
    
    constructor(private http: HttpClient, private router:Router) {
      }
    hooplaWebServiceUri = {
        protocol: 'http',
        host: "localhost",
        port: '1111',
        applicationName: ''
    };

    view(category): Observable<any[]> {
        return this.http.get<any[]>("http://localhost:1111/products/"+category);
    }
    deletecartdata(data): Observable<any[]> {
      return this.http.post<any[]>("http://localhost:1111/deletecartdata/",data);
    }
    addtocart(data) :  Observable<any> {
        if(sessionStorage.getItem('uEmail')==null)
        {
          this.router.navigate(['/login']);
        }
        else
        {
          data.pQuantity=1;
          data.userId=sessionStorage.getItem('uEmail');
          return <Observable<any>>this.http.post("http://localhost:1111/cart/", data);
        }
      }
    viewcart(userId) :  Observable<any[]> {
        return this.http.get<any[]>("http://localhost:1111/cart/" +userId);
      }
    orderhistory(userId)  :  Observable<any[]> {
        console.log("view orders of user called");
        return this.http.get<any[]>("http://localhost:1111/orderhistory/" +userId);
      }
    checkout(data) :  Observable<any> {
        data.userId=sessionStorage.getItem('uEmail');
        return <Observable<any>>this.http.post("http://localhost:1111/checkout/", data);
      }
      getsellerquantity(data):  Observable<any> {
        return  <Observable<any>>this.http.post("http://localhost:1111/getsellerquantity/" , data);
        
      }

    buildHooplaWebServiceUri() {
        return this.hooplaWebServiceUri.protocol + 
            "://" + this.hooplaWebServiceUri.host + 
            ":" + this.hooplaWebServiceUri.port + 
            "/" + this.hooplaWebServiceUri.applicationName;
    }

 

    


}