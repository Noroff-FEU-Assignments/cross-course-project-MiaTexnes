import { getQueryStringParam } from "../helpers/getQueryStringParam.js";
import { url } from "../constants.js";
import { formattedPrice } from "../helpers/formattedPrice.js";
import {
    showLoadingIndicator,
    hideLoadingIndicator,
    showErrorIndicator,
} from "./errorAndLoading.js";

const resultsContainer = document.querySelector("#container-product");
const errorContainer = document.querySelector("#error-container"); // Ensure this is the correct selector for your error container

// The buildProductCard function remains unchanged per your request
function buildProductCard(product) {
    const price = formattedPrice(product.prices.price);
    return `
    <div class="cardSpecific">
        <img class="product-image" src="${product.images[0].src}" alt="${product.description}" />
        <div class="product-text">
            <h1>${product.name}</h1>
            <p>Price $: ${price}</p>
            <h2>Description: ${product.description}</h2>
            <p>Gender: ${product.attributes[0].terms[0].name}</p>
            <p>Color: ${product.attributes[1].terms[0].name}</p>
        </div>
    </div>`;
}

async function fetchProductById(id) {
    showLoadingIndicator(resultsContainer);
    const productUrl = `${url}/${id}`; // Make sure the URL ends with a slash
    try {
        const response = await fetch(productUrl);

        if (!response.ok) {
            throw new Error(
                `There was an error fetching the product with id: ${id}`
            );
        }

        const product = await response.json();
        return product;
    } catch (error) {
        showErrorIndicator(errorContainer, error.message);
        throw error; // The error is re-thrown to be handled by the caller
    } finally {
        hideLoadingIndicator(resultsContainer);
    }
}

async function displayProduct() {
    const id = getQueryStringParam("id");

    if (!id) {
        showErrorIndicator(
            errorContainer,
            "No product ID found in the query string."
        );
        return;
    }

    try {
        const product = await fetchProductById(id);
        resultsContainer.innerHTML = buildProductCard(product);
    } catch (error) {
        // Error handling is already performed in fetchProductById
    }
}

// Call displayProduct on page load
displayProduct();

// import { getQueryStringParam } from "./helpers/getQueryStringParam.js";
// import { url } from "./constants.js";
// import { formattedPrice } from "./helpers/formattedPrice.js";

// async function getProduct() {
//     const id = getQueryStringParam("id");

//     if (!id) {
//         document.location.href = "/";
//     }

//     const productUrl = `${url}${id}`;

//     try {
//         const response = await fetch(productUrl);

//         if (response.ok === false) {
//             throw new Error(
//                 "There was an error fetching the product with id: " + id
//             );
//         }

//         const product = await response.json();

//         document.title = `${product.title} - RainyDays`;

//         const resultsContainer = document.querySelector("#container-product");
//         const price = formattedPrice(product.prices.price);
//         resultsContainer.innerHTML = `<div class="cardSpecific">
//     <img class="product-image" src="${product.images[0].src}" alt="${product.description}" />
//     <div class="product-text">
//       <h1>${product.name}</h1>
//       <p>Price: ${price}</p>
//       <h2>Description: ${product.description}</h2>
//       <p>Gender: ${product.attributes[0].terms[0].name}</p>
//       <p>Color: ${product.tags[0].slug}</p>
//     </div>
//     </div>`;
//     } catch (error) {
//         const resultsContainer = document.querySelector("#container-product");
//         resultsContainer.innerHTML = `<p class="error">${error}</p>`;
//     }
// }

// getProduct();
