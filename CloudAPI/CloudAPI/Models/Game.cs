using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudAPI.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Developer Developer { get; set; }
        public string Genre { get; set; }
    }
}
