import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as productDetails from 'src/assets/json/productDetails.json';
import * as subproducts from 'src/assets/json/subProducts.json';
import * as mainproducts from 'src/assets/json/mainProducts.json';

@Component({
  selector: 'app-sub-product-list-images',
  templateUrl: './sub-product-list-images.component.html',
  styleUrls: ['./sub-product-list-images.component.css']
})
export class SubProductListImagesComponent implements OnInit {
  id: any;
  products=[] as any;
  mainproduct: any;
  subproduct: any;
  mainproductid: any;
  subproductid: any;

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe(data => {
      this.id = data.get;
     productDetails.productDetails.forEach(product => {
       if(product.sub_product_id == this.id){
         this.products.push(product);
       }
     });
     subproducts.subProducts.forEach(sp=>{
       if(this.id==sp.id){
        this.subproduct = sp.product_name;
        this.subproductid = sp.id;
        this.mainproductid = sp.main_product_id;
       }
     });
     mainproducts.mainProducts.forEach(mp=>{
       if(mp.id == this.mainproductid){
        this.mainproduct = mp.product_name;
       }
     });
   });
  }
}
