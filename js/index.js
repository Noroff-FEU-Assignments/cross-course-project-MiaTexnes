import { url } from "./constants.js";

async function getProducts() {
    try {
        const response = await fetch(url);

        if (response.ok !== true) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }

        const products = await response.json();

        const resultsContainer = document.querySelector("#container-product");
        resultsContainer.innerHTML = "";
        resultsContainer.classList.add("product-grid");

        const firstThreeProducts = products.slice(0, 3);

        firstThreeProducts.forEach(function (product) {
            resultsContainer.innerHTML += `
    <a   href="product.html?id=${product.id}">
      <div class="card">
        <img src="${product.image}" alt="${product.description}" />
        <h1>${product.title}</h1>
        <p class="price">Price $: ${product.price}</p>
        <p class="detailButton">View details</p>
      </div>
    </a>
  `;
        });
    } catch (error) {
        console.error("Error fetching products:", error);

        const resultsContainer = document.querySelector("#container");
        resultsContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
    }
}

getProducts();
