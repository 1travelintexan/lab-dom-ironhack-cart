// ITERATION 1

function updateSubtotal(product) {

   const price = product.querySelector('.price span')
  const quantityDom = product.querySelector('.quantity input')
  let priceDom = Number(price.innerText)
  let quantity = Number(quantityDom.value)

  let subtotal = priceDom * quantity

  let subtotalDom = product.querySelector('.subtotal span')
    subtotalDom.innerHTML = subtotal

  return subtotal
}

function calculateAll() {
  
  const AllProducts = document.querySelectorAll('.product ')
  
  total = 0
  AllProducts.forEach((element) => {
   total = total + updateSubtotal(element)
  })
   
  let totalValue = document.querySelector('#total-value span')
   totalValue.innerHTML = total

}

  // ITERATION 3



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
