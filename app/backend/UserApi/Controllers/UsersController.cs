using Microsoft.AspNetCore.Mvc;
using UserApi.Models;

namespace UserApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private static List<User> Users = new()
        {
            new User { Id = 1023, Name = "John", Role = "Developer" },
            new User { Id = 1302, Name = "Sara", Role = "Tester" }
        };

        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(Users);
        }

        [HttpPost]
        public IActionResult AddUser(User user)
        {
            user.Id = Users.Max(u => u.Id) + 1;
            Users.Add(user);
            return Ok(user);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, User user)
        {
            var existing = Users.FirstOrDefault(u => u.Id == id);
            if (existing == null) return NotFound();

            existing.Name = user.Name;
            existing.Role = user.Role;
            return Ok(existing);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var user = Users.FirstOrDefault(u => u.Id == id);
            if (user == null) return NotFound();

            Users.Remove(user);
            return Ok();
        }
    }
}