using Microsoft.AspNetCore.Mvc;

namespace Calculadora_Buteco_ReactJS.Controllers
{
    public class CalcButecoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}