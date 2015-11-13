using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace HotAspNet.Controllers
{
    [Route("/")]
    public class HomeController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View();
        }
    }

    public class CommentController : Controller
    {
        private static List<Comment> _comments = new List<Comment>();
        [Route("api/comments")]
        [HttpGet]
        public IEnumerable<Comment> GetComments()
        {
            return _comments;
        }
        [Route("api/comments")]
        [HttpPost]
        public IEnumerable<Comment> AddComment(Comment comment)
        {
            comment.id = _comments.Count;
            _comments.Add(comment);
            return GetComments();
        }
    }

    public class Comment
    {
        public string author { get; set; }
        public string text { get; set; }
        public int id { get; set; }
    }
}
