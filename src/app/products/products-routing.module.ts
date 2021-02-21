import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { SubProductListComponent } from './sub-product-list/sub-product-list.component';
import { SubProductListImagesComponent } from './sub-product-list-images/sub-product-list-images.component';

const routes: Routes = [
  { path: '', component : ProductHomeComponent },
  { path: 'getproduct', component :SubProductListComponent },
  { path: 'getsubproducts', component :SubProductListImagesComponent },
  { path: 'getdetails', component :ProductViewDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
