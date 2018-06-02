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
    [Route("api/games")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly GameContext context;

        public GameController(GameContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Game> GetAllGames(string name, string genre, int? page, string sort, int length = 2, string dir = "asc")
        {
            IQueryable<Game> query = context.Games;

            if (!string.IsNullOrWhiteSpace(genre))
                query = query.Where(d => d.Genre == genre);
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
                    case "genre":
                        if (dir == "asc")
                            query = query.OrderBy(d => d.Genre);
                        else if (dir == "desc")
                            query = query.OrderByDescending(d => d.Genre);
                        break;
                }
            }

            return query.ToList();
        }

        //[Route("{id}")]
        [HttpGet("{id}")]
        public IActionResult GetGame(int id)
        {
            var game = context.Games
                        .Include(d => d.Developer)
                        .SingleOrDefault(d => d.Id == id);

            if (game == null)
                return NotFound();

            return Ok(game);
        }

        [HttpPost]
        public IActionResult CreateGame([FromBody] Game newGame)
        {
            context.Games.Add(newGame);
            context.SaveChanges();
            return Created("", newGame);
        }

        //[Route("{id]")]
        [HttpDelete("{id}")]
        public IActionResult DeleteGame(int id)
        {
            var game = context.Games.Find(id);
            if (game == null)
                return NotFound();

            context.Games.Remove(game);
            context.SaveChanges();

            return NoContent();
        }

        [HttpPut]
        public IActionResult UpdateGame([FromBody] Game updateGame)
        {
            var origGame = context.Games.Find(updateGame.Id);
            if (origGame == null)
                return NotFound();

            origGame.Name = updateGame.Name;
            origGame.Developer = updateGame.Developer;
            origGame.Genre = updateGame.Genre;

            context.SaveChanges();
            return Ok(origGame);
        }
    }
}