import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerAppliedJobsComponent } from './jobseeker-applied-jobs.component';

describe('JobseekerAppliedJobsComponent', () => {
  let component: JobseekerAppliedJobsComponent;
  let fixture: ComponentFixture<JobseekerAppliedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerAppliedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerAppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
