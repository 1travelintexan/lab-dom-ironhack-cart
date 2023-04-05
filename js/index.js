// ITERATION 1
const findRemoveBtns = () => {
  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
};
function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantityDom = product.querySelector(".quantity input");
  let priceDom = Number(price.innerText);
  let quantity = Number(quantityDom.value);

  let subtotal = priceDom * quantity;

  let subtotalDom = product.querySelector(".subtotal span");
  subtotalDom.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  const AllProducts = document.querySelectorAll(".product ");

  total = 0;
  AllProducts.forEach((element) => {
    total = total + updateSubtotal(element);
  });

  let totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = total;
}

// ITERATION 3

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode.parentNode;
  const childTarget = event.currentTarget.parentNode.parentNode;
  target.removeChild(childTarget);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //find both the name input and the price input for the item to create
  let nameInput = document.querySelector("#product-name").value;
  let priceInput = document.querySelector("#product-price").value;

  //crate an element to append to the tbody first
  let tableRow = document.createElement("tr");
  //give it the same class as the other products
  tableRow.classList.add("product");

  //take the html from the other products but inject the values from the inputs above
  let newProduct = `
  <td class="name">
    <span>${nameInput}</span>
  </td>
  <td class="price">$<span>${priceInput}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;
  //set the innerHtml to the string html for the new product
  tableRow.innerHTML = newProduct;
  //find the tbody so you can add the new product to it
  let parent = document.querySelector("tbody");
  //append the created element with its innerhtml updated to the parent tbody
  parent.appendChild(tableRow);

  //reset the inputs to blank for nice user experience
  document.querySelector("#product-name").value = "";
  document.querySelector("#product-price").value = 0;
  //call function to find all the remove buttons in the document
  findRemoveBtns();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const createBtn = document.querySelector("#create");
  createBtn.addEventListener("click", createProduct);

  //bonus function to find the new created items remove button
  findRemoveBtns();
});
