var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var cartItem = {};
 cartItem.itemName = item;
 cartItem.itemPrice = Math.floor(Math.random() * 100);
 cart.push(cartItem);
 return (`${item} has been added to your cart.`);
}

function viewCart() {
  var cartString = "In your cart, you have ";

  if (cart.length === 0) {
    return ("Your shopping cart is empty.");

  } else  {
    var items = cart.map(element => element.itemName);
    var prices = cart.map(element => element.itemPrice);

    if (cart.length === 1) {
      cartString += items[0] + " at $" + prices[0] + ".";
      return (cartString);

    } else if (cart.length > 1) {

      for (let i=0; i<cart.lenth; i++) {
        if (i === (cart.length-1)) {
          cartString += "and " + ".";
        } else {
          cartString += items[i] + " at $" + prices[i] + ",";
        }
      }
    return (cartString);
    }
  }
}

function total() {
  var theTotal = 0;
  for (let i=0; i<cart.length; i++) {
    theTotal += cart.itemPrice[i];
  }
  return (theTotal);
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++) {
    if (cart.itemName[i] === item) {
      cart.splice(i, 1);
      return (cart);
    }
  }
  return ("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber === "") {
    return ("Sorry, we don't have a credit card on file for you.");
  } else {
    return ("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
  }
}
