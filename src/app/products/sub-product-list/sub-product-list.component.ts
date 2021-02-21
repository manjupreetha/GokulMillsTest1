import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as products from 'src/assets/json/subProducts.json';
import * as mainproducts from 'src/assets/json/mainProducts.json';

@Component({
  selector: 'app-sub-product-list',
  templateUrl: './sub-product-list.component.html',
  styleUrls: ['./sub-product-list.component.css']
})
export class SubProductListComponent implements OnInit {

  @Input() items :any;
  id:any;
  data:any;
  subproducts=[] as any;
  mainproduct: any;
  mainproductid: any;

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.items);
    this.activatedroute.queryParams.subscribe(data => {
      this.id = data.get;
      products.subProducts.forEach(product => {
        if(product.main_product_id == this.id){
          this.subproducts.push(product);
          mainproducts.mainProducts.forEach(mp=>{
            if(mp.id==this.id){
              this.mainproductid = mp.id;
              this.mainproduct = mp.product_name;
            }
          });
        }        
      });
    });
  }
}
