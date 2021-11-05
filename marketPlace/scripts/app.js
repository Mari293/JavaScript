const main = document.querySelector('#principal-container');
const btn_cart = document.querySelector('.btn-cart');
const cart = document.querySelector('.cart');

const closeModal = document.querySelector('.close');
const openModal = document.querySelector('.new-product');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');

const addProduct = document.querySelector('.addProduct');
const nameProduct = document.querySelector('#name_product');
const priceProduct = document.querySelector('#price_product');
const descriptionProduct = document.querySelector('#description_product');

const cart_products= [];

openModal.addEventListener('click', seeModal);
closeModal.addEventListener('click', hiddenModal);
window.addEventListener('click', closeModalcontainer);
//addProduct.addEventListener('click', addProducts);
btn_cart.addEventListener('click', seeCart)

create_Cards()

function seeCart(event){
  event.preventDefault();
  cart.classList.toggle('cart-container');
}

function seeModal(event){
  event.preventDefault();
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modal.classList.toggle("modal-close");
}

function hiddenModal(){
  modal.classList.toggle('modal-close');
  setTimeout(function(){
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
  },850);
}

function closeModalcontainer(event){
  if (event.target==modalContainer){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
  },900);}
}

function addProducts(){
  let id = {id: products.length + 1}
  let name = {name: nameProduct.value};
  let price = {price: priceProduct.value};
  let description = {description: descriptionProduct.value};
  let newProduct = Object.assign(id, name, price, description)
  products.push(newProduct);
  console.log(products)
}

function create_Cards() {
  products.forEach(product => {
    const card = document.createElement('div');
    const card_product = document.createElement('div');
    const card_information = document.createElement('div');
    const title_card = document.createElement('h3');
    const img_card = document.createElement('img');
    const description_card = document.createElement('p');
    const price_card = document.createElement('p');
    const btn_card =document.createElement('button');
    
    card.classList.add('card');
    card_product.classList.add('card_product');
    card_information.classList.add('card_information');
    title_card.setAttribute('id', 'h3');
    img_card.setAttribute('id', 'img');
    description_card.classList.add('description_card');
    btn_card.classList.add('btn_card');
    btn_card.setAttribute('id', product.id); 
    btn_card.addEventListener('click', addCart)
    
    title_card.textContent = product.name;
    price_card.textContent = `$${price_product(product.price)} `;
    img_card.src=product.img;
    description_card.textContent = product.description;
    
    btn_card.textContent = "Add";
    
    card.appendChild(card_product);
    card.appendChild(card_information);
    card_product.appendChild(title_card);
    card_product.appendChild(img_card);
    card_product.appendChild(price_card);
    card_information.appendChild(description_card);
    card_information.appendChild(btn_card);
    main.appendChild(card);
  });
}

function price_product(price) {
  let decimal = price.toString().split(".");
  decimal[0] = decimal[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimal.join(".");
}

function addCart(event){
  cart_products.push(event.target.getAttribute('id'));
  showCart();
}

function showCart(){
  cart.innerHTML = '';
  let index = [...new Set(cart_products)];
  index.forEach(product =>{
    const productAttribute = products.filter(element =>{
      return parseInt(product)===element.id;
    })

    let counter = 0;
    for(i of cart_products){
      if (i === product){
        counter+=1;
      }
    }

    const productContainer = document.createElement('div');
    const nameProduct = document.createElement('p');
    const priceProduct = document.createElement('p');
    const imgProduct = document.createElement('img');
    const countProduct = document.createElement('p')
    const imgAdd = document.createElement('img');
    const imgSubtract = document.createElement('img');

    productContainer.classList.add('product-container');
    nameProduct.classList.add('name-product');
    imgProduct.classList.add('imgProduct');
    imgAdd.classList.add('icons');
    imgSubtract.classList.add('icons');

    nameProduct.textContent = productAttribute[0].name;
    priceProduct.textContent = `Price: $${price_product(productAttribute[0].price)}`;
    imgProduct.src = productAttribute[0].img;
    imgAdd.src = 'images/add.png';
    imgSubtract.src = 'images/subtract.png';
    countProduct.textContent = `Cantidad:${counter}`;

    productContainer.appendChild(nameProduct);
    productContainer.appendChild(priceProduct);
    productContainer.appendChild(imgProduct);
    productContainer.appendChild(imgAdd);
    productContainer.appendChild(imgSubtract);
    productContainer.appendChild(countProduct);
    cart.appendChild(productContainer);
  })
}