const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

addProductButton.addEventListener("click", function () {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  // Edge case: validate inputs
  if (!name) {
    alert("Please enter a product name.");
    return;
  }
  if (isNaN(price) || price < 0) {
    alert("Please enter a valid positive price.");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.dataset.price = price;
  li.textContent = `${name} - $${price.toFixed(2)} `;

  // Create remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", removeItem);

  li.appendChild(removeButton);
  cart.appendChild(li);

  // Update total price
  updateTotalPrice(price);

  // Clear input fields
  productNameInput.value = "";
  productPriceInput.value = "";
});
