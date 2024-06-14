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
    public class JobDetailsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public JobDetailsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("employer/{employerId}")]
        public async Task<ActionResult<IEnumerable<JobDetails>>> GetJobsByEmployer(int employerId)
        {
            return await _context.JobDetailTable.Where(j => j.EmployerId == employerId).ToListAsync();
        }


        // GET: api/JobDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobDetails>>> GetJobDetailTable()
        {
            return await _context.JobDetailTable.ToListAsync();
        }

        // GET: api/JobDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JobDetails>> GetJobDetails(int id)
        {
            var jobDetails = await _context.JobDetailTable.FindAsync(id);

            if (jobDetails == null)
            {
                return NotFound();
            }

            return jobDetails;
        }

        // PUT: api/JobDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobDetails(int id, JobDetails jobDetails)
        {
            if (id != jobDetails.JobDetailsId)
            {
                return BadRequest();
            }

            _context.Entry(jobDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/JobDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<JobDetails>> PostJobDetails(JobDetails jobDetails)
        {
            _context.JobDetailTable.Add(jobDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJobDetails", new { id = jobDetails.JobDetailsId }, jobDetails);
        }

        // DELETE: api/JobDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobDetails(int id)
        {
            var jobDetails = await _context.JobDetailTable.FindAsync(id);
            if (jobDetails == null)
            {
                return NotFound();
            }

            _context.JobDetailTable.Remove(jobDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool JobDetailsExists(int id)
        {
            return _context.JobDetailTable.Any(e => e.JobDetailsId == id);
        }
    }
}
