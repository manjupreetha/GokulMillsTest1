import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhyUsRoutingModule } from './why-us-routing.module';
import { WhyUsPageComponent } from './why-us-page/why-us-page.component';


@NgModule({
  declarations: [WhyUsPageComponent],
  imports: [
    CommonModule,
    WhyUsRoutingModule
  ]
})
export class WhyUsModule { }
