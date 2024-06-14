import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingregistrationComponent } from './landingregistration.component';

describe('LandingregistrationComponent', () => {
  let component: LandingregistrationComponent;
  let fixture: ComponentFixture<LandingregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
