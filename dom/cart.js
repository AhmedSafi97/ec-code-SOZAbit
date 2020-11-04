var array=[
    { id: 0, 
    name: "laptop",
    category :"computers",
    details: "wow",
    price: 30},

    {id: 1, 
    name: "laptop2",
    category :"computers",
    details: "wow",
    price: 25},
    
    {id: 2, 
        name: "sunscreen",
        category :"beauty",
        details: "wow",
        price: 45},
    
        {id: 3, 
            name: "T-shirt",
            category :"baby",
            details: "wow",
            price: 100}
           
];

localStorage.setItem('array', JSON.stringify(array));

 function displayCartItems(){
    
        let storedItems = localStorage.getItem('array');
        let  storedItemsArray = [];
        console.log( typeof storedItems);
        
        if (storedItems){
            storedItemsArray = JSON.parse(storedItems);
            console.log(storedItemsArray); 
            
}
return storedItemsArray;

}

console.log(displayCartItems());
 
const cartContainer= document.getElementById("cartPageProduct")

function createCartProduct (storedItemsArray)  {
    for (i=0; i<storedItemsArray.length; i++){
        console.log(storedItemsArray[i]);
        createProduct(storedItemsArray[i]); 
        }
    };


createCartProduct(displayCartItems());


function createProduct(obj){
    
    let newObj = document.createElement('div');
    newObj.setAttribute("class", "product");
    const objProps = Object.keys(obj);
    const objPropsValues = Object.values(obj);
    console.log(objProps);
    console.log(objPropsValues);
    for(let i =0; i < objProps.length; i++){
        let objProP = document.createElement('p');
        let objProPC = document.createTextNode(objProps[i]);
        objProP.appendChild(objProPC);
        console.log(objProP);
        let objProV = document.createElement('p');
        console.log(objProV);
        let objProVC = document.createTextNode(objPropsValues[i]);
        objProV.appendChild(objProVC);
        newObj.appendChild(objProP);
        newObj.appendChild( objProV);
        cartContainer.appendChild(newObj);
        console.log(objProV);
    }}
    

    function purchase(){
        cartContainer.innerHTML = "";
        let finishMessage = document.createElement('p');
        let messageContent = document.createTextNode("Purchased Successfully");
        finishMessage.appendChild(messageContent);
        cartContainer.appendChild(finishMessage);
        localStorage.removeItem("array");
    }


    function calculateTotalPrice(){
        let viewedItem = displayCartItems();
        let totalPrice = 0;
        for(let i = 0; i< viewedItem.length; i++){
            totalPrice += viewedItem[i].price;
        }
        let itemsPrice = document.getElementById('totalPriceResult');
        let actualPrice = document.createTextNode(totalPrice);
        itemsPrice.appendChild(actualPrice);
    }


    let priceBtn = document.getElementsByClassName('totalPriceButton')[0];
    priceBtn.addEventListener('click', calculateTotalPrice);

    let purchaseButton = document.getElementById('totalPurchaseButton');
    purchaseButton.addEventListener('click', purchase)