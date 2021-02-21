import { Component, OnInit } from '@angular/core';
import * as mainproducts from 'src/assets/json/mainProducts.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  mainproducts=[] as any;
  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    mainproducts.mainProducts.forEach((product: any) => {
     this.mainproducts.push(product);             
    });
  }

}
