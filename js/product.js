import { getQueryStringParam } from "./helpers/getQueryStringParam.js";
import { url } from "./constants.js";
import { formattedPrice } from "./helpers/formattedPrice.js";

async function fetchProductById(id) {
    const productUrl = `${url}${id}`;
    const response = await fetch(productUrl);

    if (!response.ok) {
        throw new Error(
            `There was an error fetching the product with id: ${id}`
        );
    }

    return response.json();
}

function displayProduct(product) {
    document.title = `${product.title} - RainyDays`;
    const resultsContainer = document.querySelector("#container-product");
    const price = formattedPrice(product.prices.price);

    const productHTML = `<div class="cardSpecific">
        <img class="product-image" src="${product.images[0].src}" alt="${product.description}" />
        <div class="product-text">
            <h1>${product.name}</h1>
            <p>Price $: ${price}</p>
            <h2>Description: ${product.description}</h2>
            <p>Gender: ${product.attributes[0].terms[0].name}</p>
            <p>Color: ${product.attributes[1].terms[0].name}</p>
        </div>
    </div>`;

    resultsContainer.innerHTML = productHTML;
}

function displayError(error) {
    const resultsContainer = document.querySelector("#container-product");
    resultsContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
}

async function getProduct() {
    const id = getQueryStringParam("id");

    if (!id) {
        document.location.href = "/";
        return;
    }

    try {
        const product = await fetchProductById(id);
        displayProduct(product);
    } catch (error) {
        displayError(error);
    }
}

getProduct();

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
