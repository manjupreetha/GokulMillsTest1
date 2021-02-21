import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'Products',
    loadChildren : () => import('./products/products.module').then( m => (m.ProductsModule))
  },
  {
    path : '',
    loadChildren : () => import('./home/home.module').then( m => (m.HomeModule))
  },
  {
    path : 'whyus',
    loadChildren : () => import('./why-us/why-us.module').then( m => (m.WhyUsModule))
  },
  {
    path : 'contact',
    loadChildren : () => import('./contact/contact.module').then( m => (m.ContactModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
