import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurworksdetailComponent } from './ourworksdetail.component';

describe('OurworksdetailComponent', () => {
  let component: OurworksdetailComponent;
  let fixture: ComponentFixture<OurworksdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurworksdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurworksdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
