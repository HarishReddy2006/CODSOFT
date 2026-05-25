let cart = [];

let cartCount = 0;

/* ADD TO CART */

function addToCart(name,price){

  cart.push({
    name:name,
    price:price
  });

  cartCount++;

  document.getElementById("cartBtn")
  .innerHTML =
  `🛒 Cart (${cartCount})`;

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  showNotification(
    name + " added to cart"
  );

}

/* NOTIFICATION */

function showNotification(message){

  const notification =
  document.createElement("div");

  notification.classList.add(
    "notification"
  );

  notification.innerText =
  message;

  document.body.appendChild(
    notification
  );

  setTimeout(() => {

    notification.classList.add(
      "show"
    );

  },100);

  setTimeout(() => {

    notification.classList.remove(
      "show"
    );

    setTimeout(() => {

      notification.remove();

    },300);

  },2000);

}

/* SEARCH */

const searchBar =
document.querySelector(".search-bar");

searchBar.addEventListener(
"keyup",
function(){

  let value =
  searchBar.value.toLowerCase();

  let products =
  document.querySelectorAll(
    ".product-card"
  );

  products.forEach(product => {

    let name =
    product.querySelector(
      ".product-name"
    )
    .innerText
    .toLowerCase();

    if(name.includes(value)){

      product.style.display =
      "block";

    }
    else{

      product.style.display =
      "none";

    }

  });

});

/* CATEGORY FILTER */

function filterCategory(category){

  let products =
  document.querySelectorAll(
    ".product-card"
  );

  products.forEach(product => {

    if(
      product.dataset.category
      === category
    ){

      product.style.display =
      "block";

    }
    else{

      product.style.display =
      "none";

    }

  });

}

function showAllProducts(){

  let products =
  document.querySelectorAll(
    ".product-card"
  );

  products.forEach(product => {

    product.style.display =
    "block";

  });

}

/* CHECKOUT PAGE */

document.getElementById(
"cartBtn"
)
.addEventListener(
"click",
function(){

  window.location.href =
  "checkout.html";

});