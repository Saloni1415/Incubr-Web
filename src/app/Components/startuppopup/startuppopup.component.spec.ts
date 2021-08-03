import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartuppopupComponent } from './startuppopup.component';

describe('StartuppopupComponent', () => {
  let component: StartuppopupComponent;
  let fixture: ComponentFixture<StartuppopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartuppopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartuppopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
