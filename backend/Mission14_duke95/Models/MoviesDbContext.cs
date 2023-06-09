﻿using Microsoft.EntityFrameworkCore;

namespace Mission14_duke95.Models
{
    public class MoviesDbContext : DbContext
    {
        public MoviesDbContext (DbContextOptions<MoviesDbContext> options) : base(options)  { }
        public DbSet<Movie> Movies { get; set;}

    }
}
