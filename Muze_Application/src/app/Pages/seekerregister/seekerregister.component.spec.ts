import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerregisterComponent } from './seekerregister.component';

describe('SeekerregisterComponent', () => {
  let component: SeekerregisterComponent;
  let fixture: ComponentFixture<SeekerregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeekerregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeekerregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
