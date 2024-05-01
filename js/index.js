import { url } from "./constants.js";
import { formattedPrice } from "./helpers/formattedPrice.js";

const resultsContainer = document.querySelector("#container-product");
const errorContainer = document.querySelector("#container-product"); // Select the error container

fetch(url, {
    method: "GET",
})
    .then((response) => {
        if (response.ok !== true) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((products) => {
        console.log(products); // Log products here

        if (!Array.isArray(products)) {
            console.error(
                "Expected products to be an array, got",
                typeof products
            );
            return;
        }

        resultsContainer.innerHTML = "";
        resultsContainer.classList.add("product-grid");

        const firstThreeProducts = products.slice(0, 3); // Use slice to get an array

        firstThreeProducts.forEach(function (product) {
            const price = formattedPrice(product.prices.price);
            resultsContainer.innerHTML += `
<a href="product.html?id=${product.id}">
  <div class="card">
    <img src="${product.images[0].src}" alt="${product.description}" />
    <h1>${product.name}</h1>
    <p class="price">Price $: ${price}</p>
  </div>
</a>`;
        });
    })
    .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
        errorContainer.innerHTML = `<p>Error: ${error.message}</p>`; // Display the error message in the HTML
    });

// import { url } from './constants.js'

// async function getProducts () {
//   try {
//     const response = await fetch(url)

//     if (response.ok !== true) {
//       throw new Error(`HTTP Error! status: ${response.status}`)
//     }

//     const products = await response.json()

//     const resultsContainer = document.querySelector('#container-product')
//     resultsContainer.innerHTML = ''
//     resultsContainer.classList.add('product-grid')

//     const firstThreeProducts = products.slice(0, 3)

//     firstThreeProducts.forEach(function (product) {
//       resultsContainer.innerHTML += `
//     <a   href="product.html?id=${product.id}">
//       <div class="card">
//         <img src="${product.image}" alt="${product.description}" />
//         <h1>${product.title}</h1>
//         <p class="price">Price $: ${product.price}</p>
//         <p class="detailButton">View details</p>
//       </div>
//     </a>
//   `
//     })
//   } catch (error) {
//     console.error('Error fetching products:', error)

//     const resultsContainer = document.querySelector('#container')
//     resultsContainer.innerHTML = '<p>Failed to load products. Please try again later.</p>'
//   }
// }

// getProducts()
