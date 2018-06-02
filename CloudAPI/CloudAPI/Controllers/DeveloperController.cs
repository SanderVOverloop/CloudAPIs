using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CloudAPI.Controllers
{
    [Route("api/developes")]
    [ApiController]
    public class DeveloperController : ControllerBase
    {
        private readonly GameContext context;

        public DeveloperController(GameContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Developer> GetAllDevelopers(string name, int? page, string sort, int length = 2, string dir = "asc")
        {
            IQueryable<Developer> query = context.Developers;

            if (!string.IsNullOrWhiteSpace(name))
                query = query.Where(d => d.Name == name);

            if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);

            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "name":
                        if (dir == "asc")
                            query = query.OrderBy(d => d.Name);
                        else if (dir == "desc")
                            query = query.OrderByDescending(d => d.Name);
                        break;
                }
            }

            return query.ToList();
        }
        
        [HttpGet("{id}")]
        public IActionResult GetDeveloper(int id)
        {
            var developer = context.Developers.Find(id);

            if (developer == null)
                return NotFound();

            return Ok(developer);
        }

        [HttpPost]
        public IActionResult CreateDeveloper([FromBody] Developer newDeveloper)
        {
            context.Developers.Add(newDeveloper);
            context.SaveChanges();
            return Created("", newDeveloper);
        }
        
        [HttpDelete("{id}")]
        public IActionResult DeleteDeveloper(int id)
        {
            var developer = context.Developers.Find(id);
            if (developer == null)
                return NotFound();

            context.Developers.Remove(developer);
            context.SaveChanges();

            return NoContent();
        }

        [HttpPut]
        public IActionResult UpdateDeveloper([FromBody] Developer updateDeveloper)
        {
            var origDeveloper = context.Developers.Find(updateDeveloper.Id);
            if (origDeveloper == null)
                return NotFound();

            origDeveloper.Name = updateDeveloper.Name;

            context.SaveChanges();
            return Ok(origDeveloper);
        }
    }
}