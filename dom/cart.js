const pureFuncs = require("../utlis/function");
var array = [];

localStorage.setItem("array", JSON.stringify(array));

function displayCartItems() {
  let storedItems = localStorage.getItem("array");
  let storedItemsArray = [];

  if (storedItems) {
    storedItemsArray = JSON.parse(storedItems);
  }
  return storedItemsArray;
}

const cartContainer = document.getElementById("cartPageProduct");

function createCartProduct(storedItemsArray) {
  for (i = 0; i < storedItemsArray.length; i++) {
    createProduct(storedItemsArray[i]);
  }
}

createCartProduct(displayCartItems());

function createProduct(obj) {
  let newObj = document.createElement("div");
  newObj.setAttribute("class", "product");
  const objProps = Object.keys(obj);
  const objPropsValues = Object.values(obj);
  for (let i = 0; i < objProps.length; i++) {
    let objProP = document.createElement("p");
    let objProPC = document.createTextNode(objProps[i]);
    objProP.appendChild(objProPC);
    let objProV = document.createElement("p");
    let objProVC = document.createTextNode(objPropsValues[i]);
    objProV.appendChild(objProVC);
    newObj.appendChild(objProP);
    newObj.appendChild(objProV);
    cartContainer.appendChild(newObj);
  }
}

function purchase() {
  cartContainer.innerHTML = "";
  let finishMessage = document.createElement("p");
  let messageContent = document.createTextNode("Purchased Successfully");
  finishMessage.appendChild(messageContent);
  cartContainer.appendChild(finishMessage);
  localStorage.removeItem("array");
}

function calculateTotalPrice() {
  let viewedItem = displayCartItems();
  let totalPrice = 0;
  for (let i = 0; i < viewedItem.length; i++) {
    totalPrice += viewedItem[i].price;
  }
  let itemsPrice = document.getElementById("totalPriceResult");
  let actualPrice = document.createTextNode(totalPrice);
  itemsPrice.appendChild(actualPrice);
}

function calculateTotalNumber() {
  let viewedItem = displayCartItems();
  let numOfItems = viewedItem.length;
  let actualNum = document.createTextNode(numOfItems);
  let itemNumberDiv = document.getElementById("totalNumberResult");
  itemNumberDiv.appendChild(actualNum);
}

let priceBtn = document.getElementsByClassName("totalPriceButton")[0];
priceBtn.addEventListener("click", calculateTotalPrice);

let purchaseButton = document.getElementById("totalPurchaseButton");
purchaseButton.addEventListener("click", purchase);

let totalNumberBtn = document.getElementsByClassName("totalNumberButton")[0];
totalNumberBtn.addEventListener("click", calculateTotalNumber);
