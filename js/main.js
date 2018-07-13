const products =[
{
  "id": "1",
  "price": 44.99,
  img: "https://picsum.photos/200/100",
  "name": "firstProduct",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan metus quis mattis feugiat. Praesent velit dui, condimentum sit amet sagittis ac, cursus id ante.",
},
{
  "id": "2",
  "price": 14.99,
  img: "https://picsum.photos/200/100",
  "name": "secondProduct",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan metus quis mattis feugiat. Praesent velit dui, condimentum sit amet sagittis ac, cursus id ante.",
},
{
  "id": "3", 
  "price": 2.99,
  img: "https://picsum.photos/200/100",
  "name": "thirdProduct",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan metus quis mattis feugiat. Praesent velit dui, condimentum sit amet sagittis ac, cursus id ante.",
},
{
  "id": "4", 
  "price": 50,
  img: "https://picsum.photos/200/100",
  "name": "fourthProduct",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan metus quis mattis feugiat. Praesent velit dui, condimentum sit amet sagittis ac, cursus id ante.",
},
]

const cartPickedItems = [];

function createProductOnList() {
  const cartArray = [];
  document.getElementById('cart').innerHTML = '0 zł'
  products.map(index => {
    const elementInList = document.createElement('li')
    const elementWithValue = document.getElementById('content-products-list').appendChild(elementInList)
    elementWithValue.classList.add('content-products-item')
    elementWithValue.innerHTML = '<img class="content-products-item-picture" src=' + index.img + '>' 
    + '<div class="content-products-item-textWrapper">' 
    + '<p class="content-products-item-name">' + index.name + '</p>'
    + '<p class="content-products-item-description">' + index.description + '</p>'
    + '</div>'
    + '<div class="content-products-item-elementsWrapper">' 
    + '<div class="content-products-item-price">' + index.price + ' zł' + '</div>'
    + '<button id="'+index.id+'" class="content-products-item-add" value="' + index.price + '">Add to cart!</button>'
    + '</div>'
    const el = document.getElementById(index.id);
    el.addEventListener('click', event => {
      const itemPrice = parseFloat(event.target.value)
      cartArray.push(itemPrice)
      const sumCart = cartArray.reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2);
      document.getElementById('cart').innerHTML = '<img id="cart-icon" src="../assets/icons/shoppingcart.png"' + '/>' + sumCart + ' zł';
      const cartItems = products.filter(product => product.id === event.target.id)
      cartPickedItems.push(cartItems);
    })
  });
}

function manageCart() {
const el = document.querySelector('.products-basket');
const productsList = document.querySelector('.products-picked');
    el.addEventListener('click', event => {
      document.querySelector('.products-picked').innerHTML = '';
      if (cartPickedItems.length <= 0) {
        alert('cart is empty, please pick some product')
      } 
      else if (cartPickedItems) {
        if (productsList.style.visibility === 'visible') {
          productsList.style.visibility = 'hidden';
        } else {
          productsList.style.visibility = 'visible';
        }
      }
    cartPickedItems.map(item => {
      document.querySelector('.products-picked').innerHTML += '<li class="products-picked-item">' + item[0].name + '</li>' + '<button class="products-picked-item-remove">X</button>';
  })
  removeItemFromCart(cartPickedItems);
})

}

function removeItemFromCart(cartPickedItems) {
  if (cartPickedItems.length >= 1) {
    cartPickedItems.map(index => {
      console.log(index[0].id)
      const el = document.querySelector('.products-picked-item-remove');
      console.log(el)
  })
}


}




manageCart();
createProductOnList();