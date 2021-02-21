import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhyUsPageComponent } from './why-us-page/why-us-page.component';

const routes: Routes = [
  { path : '', component : WhyUsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhyUsRoutingModule { }
