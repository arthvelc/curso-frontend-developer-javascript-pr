
const menuEmail = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector('.burger-menu-icon');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productListContainer = document.querySelector('.cards-container');

/*Ejecuciones de eventos */
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

/* Declaración de las funciones de cada evento */
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');

}

/* Codeando el producto en un array de objetos*/

const productList = []

productList.push({
    name: 'Bike',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Laptop',
    price: 5000,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Electric Guitar',
    price: 7000,
    image: 'https://images.pexels.com/photos/2156327/pexels-photo-2156327.jpeg?auto=compress&cs=tinysrgb&w=600'
});

productList.push({
    name: 'Speaker',
    price: 900,
    image: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=600'
});

// Tenemos que crear la forma de ese código html en js de la siguiente manera por cada producto de nuestra lista.
// No ma, es un trabajo tedioso, pero ya entendí la lógica de crear la estructura html en js.
function renderProducts(arr) {
    for (product of arr) {
        //Creamos el primer div con la clase product-card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //Ahora crearemos la imagen del producto añadiendo la propiedad src a la etiqueta de imagen
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        // Ahora vamos a hacer la etiqueta product div con la clase product-info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        //Ahora crearemos un  div sin clase 
        const productInfoDiv = document.createElement('div');

        //Ahora vamos a poner las dos etiquetas p 
        const productName = document.createElement('p');
        productName.innerText = product.name;
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        // Ahora vamos a hacer una etiqueta figure y la etiqueta img 
        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoDiv.append(productName, productPrice);
        productInfoFigure.appendChild(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        productListContainer.appendChild(productCard);
    }
}

renderProducts(productList);



