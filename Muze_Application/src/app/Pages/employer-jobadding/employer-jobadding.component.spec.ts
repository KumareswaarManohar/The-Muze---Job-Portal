import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerJobaddingComponent } from './employer-jobadding.component';

describe('EmployerJobaddingComponent', () => {
  let component: EmployerJobaddingComponent;
  let fixture: ComponentFixture<EmployerJobaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerJobaddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerJobaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
