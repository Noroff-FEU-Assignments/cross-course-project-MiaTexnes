// Your existing imports
import { url } from "../constants.js";
import { formattedPrice } from "../helpers/formattedPrice.js";
import {
    showLoadingIndicator,
    hideLoadingIndicator,
    showErrorIndicator,
} from "./errorAndLoading.js";

// Select the container
const resultsContainer = document.querySelector("#container-product");

// Start by showing the loading indicator
showLoadingIndicator();

// Fetch products
fetch(url, {
    method: "GET",
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((products) => {
        if (!Array.isArray(products)) {
            throw new Error("Expected products to be an array.");
        }

        hideLoadingIndicator(); // Hide loading indicator when data is received
        resultsContainer.style.display = ""; // Show the results container

        resultsContainer.innerHTML = ""; // Clear previous results
        resultsContainer.classList.add("product-grid");

        const firstThreeProducts = products.slice(0, 3); // Use slice to get the first three products

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
        console.error("Error:", error);
        showErrorIndicator(error.message); // Show the error indicator with the error message
    });
