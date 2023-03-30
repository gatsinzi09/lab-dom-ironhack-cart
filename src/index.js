// ITERATION 1

function updateSubtotal(product){
  console.log ('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  constsubtotal = product.querySelector('.subtotal span');

  let totalPrice = +price * + quantity;

  subtotal.innerHTML = +totalPrice;

  return +totalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product');

  // ITERATION 3
  //... your code goes here
  const total = 0;

  for(let i = 0;i < products.length; i++){
    total += updateSubtotal(products[i])
  }

  let totalHolder = document.querySelector('#total-value span');

  totalHolder.innerHTML = +total;
  return total;
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
