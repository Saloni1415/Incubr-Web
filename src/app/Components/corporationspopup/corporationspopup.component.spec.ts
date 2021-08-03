import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporationspopupComponent } from './corporationspopup.component';

describe('CorporationspopupComponent', () => {
  let component: CorporationspopupComponent;
  let fixture: ComponentFixture<CorporationspopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporationspopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporationspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
