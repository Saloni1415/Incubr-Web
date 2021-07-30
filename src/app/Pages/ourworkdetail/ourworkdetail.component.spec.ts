import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurworkdetailComponent } from './ourworkdetail.component';

describe('OurworkdetailComponent', () => {
  let component: OurworkdetailComponent;
  let fixture: ComponentFixture<OurworkdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurworkdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurworkdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
