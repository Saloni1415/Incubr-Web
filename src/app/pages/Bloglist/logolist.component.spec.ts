import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogolistComponent } from './logolist.component';

describe('LogolistComponent', () => {
  let component: LogolistComponent;
  let fixture: ComponentFixture<LogolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
