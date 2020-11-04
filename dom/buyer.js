const pureFuncs = require('../utlis/function');

function createHTMLForObj(obj) {
  if (!obj) return;
  let newObj = document.createElement("div");
  newObj.setAttribute('class', 'test');
  const objProps = Object.keys(obj);
  objProps.shift();
  objProps.forEach((prop) => {
    let objProP = document.createElement("p");
    let objProPC = document.createTextNode(prop);
    objProP.appendChild(objProPC);
    let objProV = document.createElement("p");
    let objProVC = document.createTextNode(obj[prop]);
    objProV.appendChild(objProVC);
    newObj.appendChild(objProP);
    newObj.appendChild(objProV);
    let newBtn = document.createElement("button");
    newBtn.setAttribute('class', 'addToCartBtn');
    let objID = obj.id;
    newBtn.addEventListener("click" /*function.js*/);
  });
  return newObj;
}

function filterFunc(cate) {
  let products = localStorage.getItem("/*products array*/");
  document.getElementByClassName("productContainer").innerHTML = "";
  for (i = 0; i < products.length; i++) {
    if (products[i][category] == cate) {
      let newProd = createHTMLForObj(products[i]);
      document.getElementByClassName("productContainer").appendChild(newProd);
    }
    return newObj;
}


let products = [];


let productContainer = document.querySelector(".productContainer");
localStorage.setItem('products', JSON.stringify(products));
var retrievedObject = localStorage.getItem('products');
function createProduct(retrievedObject) {
for(let i = 0; i< retrievedObject.length; i++){
    let newCreatedObject = createHTMLForObj(retrievedObject[i]);
    productContainer.appendChild(newCreatedObject);
}
}
}
