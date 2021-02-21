import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProductListImagesComponent } from './sub-product-list-images.component';

describe('SubProductListImagesComponent', () => {
  let component: SubProductListImagesComponent;
  let fixture: ComponentFixture<SubProductListImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubProductListImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProductListImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
