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
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
//   // updateSubtotal(singleProduct);
//   // end of test

  // ITERATION 2
  
const sub1 = document.querySelectorAll('.product')
let grandTotal = 0

sub1.forEach((element,index) => {
  let total1 = updateSubtotal(element)
   grandTotal = total1 + grandTotal 
   return grandTotal
})
const final = document.querySelector('#total-value')
let final.innerText = grandTotal

}



  // ITERATION 3
// let variable = document.querySelector('#total-value span')
// console.log(variable.innerText)

// ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log('The target in remove is:', target);
//   //... your code goes here
// }

// // ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

// window.addEventListener('load', () => {
//   const calculatePricesBtn = document.getElementById('calculate');
//   calculatePricesBtn.addEventListener('click', calculateAll);

//   //... your code goes here
// });
