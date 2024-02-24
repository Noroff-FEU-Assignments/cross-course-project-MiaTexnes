// Assuming the `url` import is in "constants.js"
import { url } from "./constants.js";

async function getProductsBySearchTerm(searchTerm) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }
        const products = await response.json();

        // Convert the search term to lower case for case-insensitive comparison
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        // Filter products based on the search term matching any desired attributes
        const filteredProducts = products.filter(
            (product) =>
                product.title.toLowerCase().includes(lowerCaseSearchTerm) ||
                product.description
                    .toLowerCase()
                    .includes(lowerCaseSearchTerm) ||
                product.gender.toLowerCase() === lowerCaseSearchTerm ||
                product.baseColor.toLowerCase().includes(lowerCaseSearchTerm)
            // Add more attributes here as needed
        );

        displayProducts(filteredProducts);
    } catch (error) {
        console.error("Error fetching products:", error);
        document.querySelector(
            "#container-product"
        ).innerHTML = `<p>Failed to load products. Please try again later.</p>`;
    }
}

function displayProducts(products) {
    const resultsContainer = document.querySelector("#container-product");
    resultsContainer.innerHTML = ""; // Clear previous results
    resultsContainer.classList.add("product-grid");

    products.forEach((product) => {
        resultsContainer.innerHTML += `<div class="card">
            <img src="${product.image}" alt="${product.description}" />
            <h1>${product.title}</h1>
            <p class="price">Price: ${product.price}</p>
            <a class="detailButton" href="product.html?id=${product.id}">View details</a>
        </div>`;
    });
}

// Event listener for the search button
document.getElementById("searchButton").addEventListener("click", () => {
    const searchTerm = document.getElementById("searchInput").value;
    getProductsBySearchTerm(searchTerm);
});
