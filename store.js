// TODO:
var products = [
  { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", price: 20 },
  { referenceNumber: 1233, name: "Block", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
  { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
]
// Declare `shoppingCart`, something where you will be storing all products that the user buys.
var shoppingCart = [];

// Declare `products`, the different that you will be selling under each of the departments.

var printProductsFromShoppingCart = function() {
  document.getElementById('shopping-cart').innerHTML = "";
  // iterate over the shoppingCart and display the contents
  // use the printProductsOnScreen function for inspiration
  shoppingCart.forEach(function(product) {
    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('shopping-cart').appendChild(productElement);
  })
};

var addProductToCart = function(productNumber) {

  console.log(productNumber);
  // Find the product in the array of objects with the correct reference number
  // Add the product to your shopping cart
  products.forEach(function(product) {
    if (parseInt(product.referenceNumber) === parseInt(productNumber)) {
      shoppingCart.push(product);
    }

  })

  printProductsFromShoppingCart();
  let totalAmount = 0;
  // calculate the total price of your cart, and use it:
  for (i = 0; i < shoppingCart.length; i++) {
    totalAmount = totalAmount + shoppingCart[i].price;
  }
  updateTotalPrice(totalAmount);
};

var checkoutCustomer = function() {
  let amount = document.getElementById('total-price').innerHTML;
  console.log(amount);
  amount=parseInt(amount);
  //replace this with showing a nice goodbye message showing the amount to be paid.
  window.alert(`your total is ${amount}`);
  window.alert('thanks for your purchase and see you soon');
  //empty the shopping cart
  shoppingCart=[];
  document.getElementById('shopping-cart').innerHTML = "";
  document.getElementById('total-price').innerHTML="";

}

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var updateTotalPrice = function(amount) {
  document.getElementById('total-price').innerText = amount;
};

var printProductsOnScreen = function() {
  for (var product of products) {

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;
    referenceNumberElement.onclick = function() {
      //this method is called when the reference number is clicked
      var productNumber = this.innerHTML;
      //use the reference number to look up the product and add it to
      addProductToCart(productNumber);
    };

    var nameElement = document.createElement('span');
    nameElement.className = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);
  }
};

document.onreadystatechange = function() {
  if (document.readyState == "interactive") {
    printProductsOnScreen();
    document.getElementById("checkout").onclick = function() {
      checkoutCustomer();
    }
  }
};
