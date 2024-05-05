// Your existing imports
import { url } from "../constants.js";
import { thumbnails } from "../ui/thumbnails.js";
import { formattedPrice } from "../helpers/formattedPrice.js";
import {
    showLoadingIndicator,
    hideLoadingIndicator,
    showErrorIndicator,
} from "./errorAndLoading.js";

// Select the container
const resultsContainer = document.querySelector("#container-product");

function displayProducts(products) {
    if (resultsContainer) {
        resultsContainer.classList.add("product-grid");

        const productCards = products
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

        resultsContainer.innerHTML = productCards;
    }
}

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

        displayProducts(products); // Call the displayProducts function
        thumbnails(products, "#thumbnails"); // Call the thumbnails function with the products and a selector for where to display the thumbnails
    })
    .catch((error) => {
        console.error("Error:", error);
        showErrorIndicator(error.message); // Show the error indicator with the error message
    });
