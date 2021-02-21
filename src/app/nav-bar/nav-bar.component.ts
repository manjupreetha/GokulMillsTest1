import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  app=[] as any;
  btns=[] as any;
  public href: string = "";
  currentChoice: string = "home";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
  }

  setActive(choice: string): void{
      this.currentChoice = choice;
  }

  getActive(choice: string) : string{
      if(this.currentChoice == choice)
          return "item active";
      else
          return "item";
  }

}
