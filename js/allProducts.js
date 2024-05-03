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

        return await response.json();
    } catch (error) {
        // Handle fetch errors
        displayError(error.message);
        throw error; // It's still a good idea to re-throw the error after handling it
    }
}

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
    } else {
        console.error("Error: resultsContainer not found in the DOM.");
    }
}

function displayError(message) {
    console.error("Error:", message); // Log the error message
    if (errorContainer) {
        errorContainer.innerHTML = `<p>Error: ${message}</p>`; // Display the error message in the HTML
    } else {
        console.error("Error: errorContainer not found in the DOM.");
    }
}

async function init() {
    try {
        const products = await fetchProducts();

        if (!Array.isArray(products)) {
            throw new Error("Expected products to be an array.");
        }

        displayProducts(products);

        try {
            thumbnails(products, "#thumbnails"); // Assuming thumbnails is a function that needs to be called here
        } catch (thumbnailError) {
            console.error("Thumbnail error:", thumbnailError.message);
        }
    } catch (error) {
        // Since displayError is called within fetchProducts, this catch block might be redundant
        // unless there are other possible errors that can occur in the try block above
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
