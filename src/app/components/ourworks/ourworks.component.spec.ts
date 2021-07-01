import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurworksComponent } from './ourworks.component';

describe('OurworksComponent', () => {
  let component: OurworksComponent;
  let fixture: ComponentFixture<OurworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
