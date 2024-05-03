import { url } from "./constants.js";
import { thumbnails } from "./ui/thumbnails.js";
import { formattedPrice } from "./helpers/formattedPrice.js";

const resultsContainer = document.querySelector("#container-product");
const errorContainer = document.querySelector("#error-container"); // Ensure this is the correct selector

async function fetchProducts() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        throw error; // Re-throwing the error to be caught by the calling function
    }
}

function displayProducts(products) {
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

function displayError(message) {
    console.error("Error:", message); // Log the error message
    errorContainer.innerHTML = `<p>Error: ${message}</p>`; // Display the error message in the HTML
}

async function init() {
    try {
        const products = await fetchProducts();

        if (!Array.isArray(products)) {
            displayError("Expected products to be an array.");
            return;
        }

        displayProducts(products);
        thumbnails(products, "#thumbnails"); // Assuming thumbnails is a function that needs to be called here
    } catch (error) {
        displayError(error.message);
    }
}

init();

// import { url } from "./constants.js";
// import { thumbnails } from "./ui/thumbnails.js";
// import { formattedPrice } from "./helpers/formattedPrice.js";

// const resultsContainer = document.querySelector("#container-product");
// const errorContainer = document.querySelector("#container-product"); // Select the error container

// fetch(url, {
//     method: "GET",
// })
//     .then((response) => {
//         if (response.ok !== true) {
//             throw new Error(`HTTP Error! status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((products) => {
//         console.log(products); // Log products here

//         if (!Array.isArray(products)) {
//             console.error(
//                 "Expected products to be an array, got",
//                 typeof products
//             );
//             return;
//         }

//         resultsContainer.innerHTML = "";
//         resultsContainer.classList.add("product-grid");
//         thumbnails(products, "#thumbnails");
//         products.forEach(function (product) {
//             const price = formattedPrice(product.prices.price);
//             resultsContainer.innerHTML += `
//       <a href="product.html?id=${product.id}">
//     <div class="card">
//     <img src="${product.images[0].src}" alt="${product.description}" />
//     <h1>${product.name}</h1>
//     <p class="price">Price $: ${price}</p>
//   </div>
// </a>`;
//         });
//     })
//     .catch((error) => {
//         // Handle any errors
//         console.error("Error:", error);
//         errorContainer.innerHTML = `<p>Error: ${error.message}</p>`; // Display the error message in the HTML
//     });
