using Microsoft.AspNetCore.Mvc;
using Mission14_duke95.Models;

namespace Mission14_duke95.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;
        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            return context.Movies.Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();
        }
    }
}
