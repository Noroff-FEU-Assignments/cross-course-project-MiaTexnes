// import { url } from "./constants";

// let cart = [];

// fetch(url)
//     .then((response) => response.json())
//     .then((products) => {
//         // Display products on the page
//         const productsContainer = document.querySelector(".products");
//         products.forEach((product) => {
//             // Create and append product cards to the products container
//             const productCard = createProductCard(product);
//             productsContainer.appendChild(productCard);
//         });
//     });

// // Function to create product card
// function createProductCard(product) {
//     const card = document.createElement("div");
//     card.classList.add("product-card");
//     card.innerHTML = `
//         <img src="${product.image}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>${product.price}</p>
//         <button onclick="addToCart(${product.id})">Add to Cart</button>
//     `;
//     return card;
// }

// // Function to add a product to the cart
// function addToCart(productId) {
//     fetch(`${url}/${productId}`)
//         .then((response) => response.json())
//         .then((product) => {
//             cart.push(product);
//             // Update the cart total
//             // This will depend on how you're displaying the cart total
//         });
// }

// window.addToCart = addToCart;

// function updateCartDisplay() {
//     const cartContainer = document.querySelector(".cart");
//     cartContainer.innerHTML = "";

//     cart.forEach((product) => {
//         const productElement = document.createElement("div");
//         productElement.textContent = product.name;
//         cartContainer.appendChild(productElement);
//     });
// }

// // Call this function whenever a product is added to the cart
// function addToCart(productId) {
//     fetch(`${url}/${productId}`)
//         .then((response) => response.json())
//         .then((product) => {
//             cart.push(product);
//             updateCartDisplay();
//         });
// }


