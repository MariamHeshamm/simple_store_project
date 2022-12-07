
var cookiesArr = new Array();
function GetCookie(cookieName)
{
    allCookies = document.cookie.split(";");
    for(let i = 0; i<allCookies.length ;i++)
    {
        cookie = allCookies[i].split('=');
        if(cookie[0].trim() == cookieName)
           return cookie[1];
            
    }
    return -1;
}

function SetCookie(cookieName,cookieValue,cookieExpireDate)
{
   if(cookieExpireDate)
   {
     document.cookie = cookieName + "=" + cookieValue + ";expires=" + cookieExpireDate.toGMString;
   }
   else
   {
    document.cookie = cookieName + "=" + cookieValue ;
   }
}

function DeleteCookie(cookieName)
{
  var date = new Date();
  document.cookie = cookieName + "=;expires=" + date.toUTCString();    

}

function GetAllCookies()
{
    allCookies = document.cookie.split(";");
    var arr = new Array();
    for(let i = 0; i<allCookies.length ;i++)
    {
        cookie = allCookies[i].split('=');
        arr[cookie[0].trim()] = cookie[1];       
    }
    return arr;
}

function HasCookie(cookieName)
{
    if(GetCookie(cookieName) != -1)
      return true;

    return false;
}