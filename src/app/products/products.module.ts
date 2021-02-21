import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { LinkBreadCrumbsComponent } from './link-bread-crumbs/link-bread-crumbs.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductSubComponent } from './product-sub/product-sub.component';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { SubProductListComponent } from './sub-product-list/sub-product-list.component';
import { SubProductListImagesComponent } from './sub-product-list-images/sub-product-list-images.component';


@NgModule({
  declarations: [LinkBreadCrumbsComponent, ProductHomeComponent, ProductSubComponent, ProductViewDetailsComponent, SubProductListComponent, SubProductListImagesComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
