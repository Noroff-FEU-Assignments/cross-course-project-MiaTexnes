import { url } from "../constants.js";
import { formattedPrice } from "../helpers/formattedPrice.js";

const resultsContainer = document.querySelector("#container-product");

async function fetchProducts() {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
    }

    return response.json();
}

function filterProductsByGender(products, gender) {
    return products.filter((product) =>
        product.attributes.some(
            (attribute) =>
                attribute.name === "Gender" &&
                attribute.terms.some(
                    (term) => term.name.toLowerCase() === gender.toLowerCase()
                )
        )
    );
}

function buildProductCard(product) {
    const price = formattedPrice(product.prices.price);
    return `
    <a href="product.html?id=${product.id}">
      <div class="card">
        <img src="${product.images[0].src}" alt="${product.description}" />
        <h1>${product.name}</h1>
        <p class="price">Price $: ${price}</p>
        <p class="detailButton">View details</p>
      </div>
    </a>
  `;
}

async function displayProducts(gender) {
    try {
        const products = await fetchProducts();
        const filteredProducts = filterProductsByGender(products, gender);

        resultsContainer.classList.add("product-grid");
        resultsContainer.innerHTML = filteredProducts
            .map(buildProductCard)
            .join("");
    } catch (error) {
        console.error("Error fetching products:", error);
        resultsContainer.innerHTML =
            "<p>Failed to load products. Please try again later.</p>";
    }
}

function handlePageChange() {
    const pathname = window.location.pathname;

    if (pathname.includes("/women")) {
        displayProducts("female");
    } else if (pathname.includes("/men")) {
        displayProducts("male");
    }
}

// Call handlePageChange on page load
handlePageChange();

// import { url } from './constants.js'
// import { formattedPrice } from './helpers/formattedPrice.js'

// const resultsContainer = document.querySelector('#container-product')

// async function getProductsByGender (gender) {
//   try {
//     const response = await fetch(url)

//     if (!response.ok) {
//       throw new Error(`HTTP Error! status: ${response.status}`)
//     }

//     const products = await response.json()

//     const filteredProducts = products.filter((product) =>
//       product.attributes.some(
//         (attribute) =>
//           attribute.name === 'Gender' &&
//                     attribute.terms.some(
//                       (term) =>
//                         term.name.toLowerCase() === gender.toLowerCase()
//                     )
//       )
//     )

//     resultsContainer.innerHTML = ''
//     resultsContainer.classList.add('product-grid')
//     filteredProducts.forEach(function (product) {
//       const price = formattedPrice(product.prices.price)
//       resultsContainer.innerHTML += `
//         <a href="product.html?id=${product.id}">
//           <div class="card">
//             <img src="${product.images[0].src}" alt="${product.description}" />
//             <h1>${product.name}</h1>
//             <p class="price">Price $: ${price}</p>
//             <p class="detailButton">View details</p>
//           </div>
//         </a>
//       `
//     })
//   } catch (error) {
//     console.error('Error fetching products:', error)

//     resultsContainer.innerHTML =
//             '<p>Failed to load products. Please try again later.</p>'
//   }
// }

// function handlePageChange () {
//   const pathname = window.location.pathname
//   console.log(pathname)
//   if (pathname === '/women') {
//     getProductsByGender('Female')
//   } else if (pathname === '/men') {
//     getProductsByGender('Male')
//   }
// }

// // Call handlePageChange on page load
// handlePageChange()
