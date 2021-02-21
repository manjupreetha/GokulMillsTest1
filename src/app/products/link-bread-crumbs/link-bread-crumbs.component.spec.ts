import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBreadCrumbsComponent } from './link-bread-crumbs.component';

describe('LinkBreadCrumbsComponent', () => {
  let component: LinkBreadCrumbsComponent;
  let fixture: ComponentFixture<LinkBreadCrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkBreadCrumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBreadCrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
