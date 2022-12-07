var proCode=window.location.search.split("?")[1];//get product IdCode from query string

var code = proCode;
document.getElementById("name").innerText = productsArr[code].name;
document.getElementById("price").innerText = productsArr[code].price+" EGP";
document.getElementById("discount").innerText = productsArr[code].discount+"%OFF";
document.getElementById("prdImg").src = "Assists/"+productsArr[code].img;
document.getElementById("quant").max=productsArr[code].rem;
document.getElementById("description").innerText=productsArr[code].description;
function addToCart()
{
    alert("Item Added To Cart Successfully");
}





