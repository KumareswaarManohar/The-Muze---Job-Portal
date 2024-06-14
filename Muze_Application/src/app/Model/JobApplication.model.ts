import { JobDetails } from "./JobDetails.model";

export interface JobApplication {
    jobApplicationId?: number;
    jobDetailsId: number;
    jobSeekerId: number;
    applicationDate: Date;
    jobDetails?: JobDetails;
    jobSeeker?: {
      jobSeekerId: number;
      fullName: string;
      email: string;
      skills: string;
      yearsOfExperience: number;
    };
  }
  