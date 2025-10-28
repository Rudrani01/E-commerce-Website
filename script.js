let buttons = document.querySelectorAll(".prod button");
let cartCount = document.getElementById("cart-count");

let cartItems = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "Add to Cart") {
      // Add item
      cartItems++;
      btn.innerText = "Remove from Cart";
      btn.style.backgroundColor = "red"; 
    } else {
      // Remove item
      cartItems--;
      btn.innerText = "Add to Cart";
      btn.style.backgroundColor = ""; 
    }

    cartCount.innerText = cartItems;

    if (cartItems < 0) {
      cartItems = 0;
      cartCount.innerText = 0;
    }
  });
});
