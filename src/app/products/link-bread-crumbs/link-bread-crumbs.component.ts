import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-bread-crumbs',
  templateUrl: './link-bread-crumbs.component.html',
  styleUrls: ['./link-bread-crumbs.component.css']
})
export class LinkBreadCrumbsComponent implements OnInit {

  constructor() { }

  @Input() mainProduct: any;
  @Input() mainProductid: any;
  @Input() subProduct: any;
  @Input() subProductid: any;
  @Input() productName: any;

  productlink = "../getproduct";
  subproductlink = "../getsubproducts";

  ngOnInit(): void {
  }

}
