const pureFuncs = require("../utlis/function");
let addProductBtnco = document.getElementById("addBtn");
addProductBtnco.addEventListener("click", addItem);
let productArray;
let id;

if (!JSON.parse(localStorage.getItem("productArray"))) {
  productArray = [];
} else {
  productArray = JSON.parse(localStorage.getItem("productArray"));
}

function addItem() {
  let product = {};
  let name = document.getElementById("productName").value;
  let category = document.getElementById("productCategory").value;
  let price = document.getElementById("productPrice").value;

  if (!localStorage.getItem("lastId")) {
    id = "0";
  } else {
    id = localStorage.getItem("lastId");
  }

  product.id = id;
  product.name = name;
  product.category = category;
  product.Price = price;

  productArray = pureFuncs.addToItemList(product, productArray);
  localStorage.setItem("lastId", `${++id}`);
  localStorage.setItem("productArray", JSON.stringify(productArray));
}
