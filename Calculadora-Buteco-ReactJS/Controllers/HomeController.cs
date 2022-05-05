using Microsoft.AspNetCore.Mvc;

namespace Calculadora_Buteco_ReactJS.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}