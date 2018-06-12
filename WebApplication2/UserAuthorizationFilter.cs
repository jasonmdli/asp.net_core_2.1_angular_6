using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Threading.Tasks;

namespace WebApplication2
{
  public class UserAuthorizationFilter : IAuthorizationFilter {
    public void OnAuthorization(AuthorizationFilterContext context) {
      var user = context.HttpContext.User;
      //if (user.Identity.Name != "jli") {
      //  var ctx = context.HttpContext;
      //  ctx.Response.Clear();
      //  ctx.Response.StatusCode = 401;
      //  ctx.Response.Headers.Add("WWW-Authenticate", "Basic realm=\"gln.com\"");
      //  ctx.Response.Body.Flush();
      //}
    }
  }
}
