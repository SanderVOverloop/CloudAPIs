using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudAPI.Models
{
    public class GameContext: DbContext
    {
        public GameContext (DbContextOptions<GameContext> options): base(options) { }
        public DbSet<Game> Games { get; set; }
        public DbSet<Developer> Developers { get; set; }
    }
}
