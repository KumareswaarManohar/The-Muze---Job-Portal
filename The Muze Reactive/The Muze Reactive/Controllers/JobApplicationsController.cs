using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using The_Muze_Reactive.Models;

namespace The_Muze_Reactive.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobApplicationsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public JobApplicationsController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<ActionResult<JobApplication>> PostJobApplication(JobApplication jobApplication)
        {
            _context.JobApplicationsTable.Add(jobApplication);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetJobApplication), new { id = jobApplication.JobApplicationId }, jobApplication);
        }



        [HttpGet("employer/{employerId}")]
        public async Task<ActionResult<IEnumerable<JobApplication>>> GetApplicationsByEmployer(int employerId)
        {
            var applications = await _context.JobApplicationsTable
                                             .Include(a => a.JobDetails)
                                             .Include(a => a.JobSeeker)
                                             .Where(a => a.JobDetails.EmployerId == employerId)
                                             .ToListAsync();

            if (applications == null)
            {
                return NotFound();
            }

            return applications;
        }


        //[HttpPost]
        //public async Task<ActionResult<JobApplication>> ApplyForJob(JobApplication jobApplication)
        //{
        //    jobApplication.ApplicationDate = DateTime.UtcNow;
        //    _context.JobApplicationsTable.Add(jobApplication);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction(nameof(GetJobApplication), new { id = jobApplication.JobApplicationId }, jobApplication);
        //}

        [HttpGet("{id}")]
        public async Task<ActionResult<JobApplication>> GetJobApplication(int id)
        {
            var jobApplication = await _context.JobApplicationsTable
                                               .Include(j => j.JobDetails)
                                               .Include(j => j.JobSeeker)
                                               .FirstOrDefaultAsync(j => j.JobApplicationId == id);

            if (jobApplication == null)
            {
                return NotFound();
            }

            return jobApplication;
        }

        [HttpGet("byEmployer/{employerId}")]
        public async Task<ActionResult<IEnumerable<JobApplication>>> GetJobApplicationsByEmployer(int employerId)
        {
            return await _context.JobApplicationsTable
                                 .Include(j => j.JobDetails)
                                 .Include(j => j.JobSeeker)
                                 .Where(j => j.JobDetails.EmployerId == employerId)
                                 .ToListAsync();
        }

        [HttpGet("byJobSeeker/{jobSeekerId}")]
        public async Task<ActionResult<IEnumerable<JobApplication>>> GetJobApplicationsByJobSeeker(int jobSeekerId)
        {
            return await _context.JobApplicationsTable
                                 .Include(j => j.JobDetails)
                                 .Include(j => j.JobSeeker)
                                 .Where(j => j.JobSeekerId == jobSeekerId)
                                 .ToListAsync();
        }
    

    // GET: api/JobApplications
    [HttpGet]
        public async Task<ActionResult<IEnumerable<JobApplication>>> GetJobApplicationsTable()
        {
            return await _context.JobApplicationsTable.ToListAsync();
        }

        //// GET: api/JobApplications/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<JobApplication>> GetJobApplication(int id)
        //{
        //    var jobApplication = await _context.JobApplicationsTable.FindAsync(id);

        //    if (jobApplication == null)
        //    {
        //        return NotFound();
        //    }

        //    return jobApplication;
        //}

        //// PUT: api/JobApplications/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutJobApplication(int id, JobApplication jobApplication)
        //{
        //    if (id != jobApplication.JobApplicationId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(jobApplication).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!JobApplicationExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/JobApplications
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<JobApplication>> PostJobApplication(JobApplication jobApplication)
        //{
        //    _context.JobApplicationsTable.Add(jobApplication);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetJobApplication", new { id = jobApplication.JobApplicationId }, jobApplication);
        //}

        // DELETE: api/JobApplications/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobApplication(int id)
        {
            var jobApplication = await _context.JobApplicationsTable.FindAsync(id);
            if (jobApplication == null)
            {
                return NotFound();
            }

            _context.JobApplicationsTable.Remove(jobApplication);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //private bool JobApplicationExists(int id)
        //{
        //    return _context.JobApplicationsTable.Any(e => e.JobApplicationId == id);
        //}
    }
}
