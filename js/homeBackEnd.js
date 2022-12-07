const numOfCategories = 4;
var dispalyedCategories = 0; //check if all categories are unchecked
var concatenatedFlag = 0; //1 if one caetgory or more are checked
var concatnatedArr={}; // array of current products from category list

//welcome MSG
var welcome_h1 = document.getElementById("welcome");
welcome_h1.innerText = "Welcome " + window.location.search.split("?")[1].replace("%20" , " ");

//Create Product Node Template
//////////////////////// 
//product div
var proDiv=document.createElement("div");
proDiv.classList.add('product');

//info div
var infoDiv=document.createElement("div");
//imgBox div
imgBox = document.createElement("div");
imgBox.classList.add('imgBx');
imgBox.appendChild(document.createElement("img"));
infoDiv.appendChild(imgBox);

infoDiv.classList.add('info');
infoDiv.appendChild(document.createElement("h4"));
// code class
var sp=document.createElement("strong");
var di=document.createElement("div");
di.appendChild(document.createTextNode('PRODUCT CODE: '));
di.classList.add('code');
di.appendChild(sp);
infoDiv.appendChild(di);
// price class
sp=document.createElement("span");
di=document.createElement("div");
di.classList.add('price');
di.appendChild(sp);
infoDiv.appendChild(di);

//append to product div
proDiv.append(infoDiv);
//////////////////////////////
/* 
.product (img,.info) (h4,.code.price) (strong,span)
*/

getProducts(); //initial run(all products are inserted)

function getProducts(ProductList=productsArr){ //in html


    for(i in ProductList){
        var grid=document.getElementById("grid");
        var proClone=proDiv.cloneNode(true);
        proClone.id=ProductList[i].code;
        proClone.getElementsByTagName('img')[0].src="/Assists/"+ProductList[i].img;
        proClone.getElementsByClassName("info")[0].getElementsByTagName('h4')[0].innerText=ProductList[i].name;
        proClone.getElementsByClassName("code")[0].getElementsByTagName('strong')[0].innerText=ProductList[i].code;
        proClone.getElementsByClassName("price")[0].getElementsByTagName('span')[0].innerText=ProductList[i].price+" EGP";
  
        grid.appendChild(proClone);
       
        proClone.addEventListener('click', 
          function(){ variables = this.id;
            var url = "./productPage.html?" + variables;
            window.open(url);
        }, false);
        

    }
}



function filterByCategory(categoryName , productsArr, concatnatedArr)
{

  for (let i in productsArr) {
    if(productsArr[i].category == categoryName)
    {
   
      if(typeof concatnatedArr ==='object')
      concatnatedArr[i] = productsArr[i];
    }
  }
 
}


function removeCategory(categoryName, concatnatedArr)
{
 
  for (let i in concatnatedArr) {
    if(concatnatedArr[i].category == categoryName)
    {
      if(typeof concatnatedArr ==='object')
      {
        var delPro =document.getElementById(concatnatedArr[i].code);
        delPro.remove();
        delete concatnatedArr[i];
      }
    }
    
  }
  
}

//filteration function triggered when category is checked
function ifChecked(categoryName , checked)
{
    if(checked)//if it is checked
    {
        concatenatedFlag=1;
        filterByCategory(categoryName , productsArr, concatnatedArr);
        var grid=document.getElementById("grid");
        grid.innerHTML = "";
        getProducts(concatnatedArr);
        dispalyedCategories++; 
    }
    else //if it is unchecked
    {
        removeCategory(categoryName, concatnatedArr);
        dispalyedCategories--;
        if(!dispalyedCategories)//if all ckeckboxes are unchecked
        {
            concatenatedFlag = 0; //no category is checked
            getProducts(productsArr);//display all products
        }
    }
    
}

//filter by price rang
function applyPriceRange(buttonNode)
{
    maxNode = buttonNode.previousElementSibling.previousElementSibling.previousElementSibling;
    max = maxNode.value;
    var minNode = maxNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
    var min = minNode.value;
    
    if(concatenatedFlag){ //if categories are checked
        var  copy={};
        copyArr(concatnatedArr,copy);
        priceRange(min , max , copy);
    }
    else{ //if no categories are checked
        var  copy={};
        copyArr(productsArr,copy);
        priceRange(min , max , copy);
    }
}

 function priceRange(min,max,prods){
    for(i in prods)
    {
      var delPro =document.getElementById(prods[i].code);
        if((prods[i].price<min || prods[i].price>max)) //out of range
        {  
            delPro.style.display='none';//hide product  div  
        }
        else{
          delPro.style.display='block';//display product  dic
        }
  
    }

}
function copyArr(orig,copy){
  for(i in orig)
    copy[i]=orig[i];

}