using System.ComponentModel.DataAnnotations;

namespace Mission14_duke95.Models
{
    public class Movie
    {
        [Key]
        public int MovieID { get; set; }
        public string? Category { get; set; }

        public string? Title { get; set; }

        public int Year { get; set; }   

        public string? Director { get; set; }

        public string? Edited { get; set; }

        public string? LentTo { get; set; }

        public string? Notes { get; set; }
    }
}
