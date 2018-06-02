using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudAPI.Models
{
    public class DbInitializer
    {
        public static void Initialize(GameContext context)
        {
            //Create the db if not yet exist
            context.Database.EnsureCreated();

            //Are there already games present ?
            if (!context.Games.Any())
            {
                var psyonix = new Developer()
                {
                    Name = "Psyonix, Inc."
                };
                context.Developers.Add(psyonix);

                var riotgames = new Developer()
                {
                    Name = "Riot Games"
                };
                context.Developers.Add(riotgames);

                var rocketleague = new Game()
                {
                    Name = "Rocket league",
                    Developer = psyonix,
                    Genre = "multiplayer"
                };
                context.Games.Add(rocketleague);

                var leagueoflegends = new Game()
                {
                    Name = "League of Legends",
                    Developer = riotgames,
                    Genre = "moba"
                };
                context.Games.Add(leagueoflegends);

                //Save all the changes to the DB
                context.SaveChanges();
            }
        }
    }
}
