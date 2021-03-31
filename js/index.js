// ITERATION 1

function updateSubtotal(product) {
 
   const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
   let priceValue = price.innerText
   let quantityValue = quantity.value
  
  let subtotal = priceValue * quantityValue
  
  const subtotalElement = product.querySelector('.subtotal span')
  subtotalElement.innerText = subtotal

  return subtotal
}

function calculateAll() {
  // ITERATION 2
  
const sub1 = document.querySelectorAll('.product')
let grandTotal = 0

sub1.forEach((element) => {
  let total1 = updateSubtotal(element)
   grandTotal = total1 + grandTotal    
})

return grandTotal




  // ITERATION 3

  const cal = document.querySelector('#calculate')
  cal.addEventListener('click' () => {
    let finalPrice = document.querySelector('#total-value span')
    finalPrice.innerText = grandTotal
  })
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
