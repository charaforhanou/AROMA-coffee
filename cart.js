// Load cart from "text storage"
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(name, price) {
    const item = cart.find(p => p.name === name);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    // Save as TEXT (JSON)
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    alert(name + " added to cart");
}

// Update cart counter
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const counter = document.getElementById("cart-count");
    if (counter) counter.innerText = count;
}

// Initialize counter on load
updateCartCount();
