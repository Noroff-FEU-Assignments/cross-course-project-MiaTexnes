import { url } from "./constants.js";
import { formattedPrice } from "./helpers/formattedPrice.js";

const resultsContainer = document.querySelector("#container-product");
const errorContainer = document.querySelector("#error-container"); // Ensure this is the correct selector

function handleErrors(response) {
    if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
    }
    return response.json();
}

function displayProducts(products) {
    if (!Array.isArray(products)) {
        throw new Error("Expected products to be an array.");
    }

    const MAX_PRODUCTS_DISPLAY = 3;
    const productHTML = products
        .slice(0, MAX_PRODUCTS_DISPLAY)
        .map((product) => {
            const price = formattedPrice(product.prices.price);
            return `
      <a href="product.html?id=${product.id}">
        <div class="card">
          <img src="${product.images[0].src}" alt="${product.description}" />
          <h1>${product.name}</h1>
          <p class="price">Price $: ${price}</p>
          <p class="detailButton">View details</p>
        </div>
      </a>`;
        })
        .join("");

    resultsContainer.innerHTML = productHTML;
    resultsContainer.classList.add("product-grid");
}

function displayError(error) {
    console.error("Error:", error);
    errorContainer.innerHTML = `<p>Error: ${error.message}</p>`;
}

fetch(url, { method: "GET" })
    .then(handleErrors)
    .then(displayProducts)
    .catch(displayError);

// import { url } from './constants.js'
// import { formattedPrice } from './helpers/formattedPrice.js'

// const resultsContainer = document.querySelector('#container-product')
// const errorContainer = document.querySelector('#container-product') // Select the error container

// fetch(url, {
//   method: 'GET'
// })
//   .then((response) => {
//     if (response.ok !== true) {
//       throw new Error(`HTTP Error! status: ${response.status}`)
//     }
//     return response.json()
//   })
//   .then((products) => {
//     console.log(products) // Log products here

//     if (!Array.isArray(products)) {
//       console.error(
//         'Expected products to be an array, got',
//         typeof products
//       )
//       return
//     }

//     resultsContainer.innerHTML = ''
//     resultsContainer.classList.add('product-grid')

//     const firstThreeProducts = products.slice(0, 3) // Use slice to get an array

//     firstThreeProducts.forEach(function (product) {
//       const price = formattedPrice(product.prices.price)
//       resultsContainer.innerHTML += `
// <a href="product.html?id=${product.id}">
//   <div class="card">
//     <img src="${product.images[0].src}" alt="${product.description}" />
//     <h1>${product.name}</h1>
//     <p class="price">Price $: ${price}</p>
//   </div>
// </a>`
//     })
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.error('Error:', error)
//     errorContainer.innerHTML = `<p>Error: ${error.message}</p>` // Display the error message in the HTML
//   })
