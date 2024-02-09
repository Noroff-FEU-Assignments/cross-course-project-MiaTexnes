import { url } from "./constants.js";

async function getProductsByGender(gender) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    const products = await response.json();

    const filteredProducts = products.filter(
      (product) => product.gender === gender
    );

    const resultsContainer = document.querySelector("#container-product");
    resultsContainer.innerHTML = "";
    resultsContainer.classList.add("product-grid");

    filteredProducts.forEach(function (product) {
      resultsContainer.innerHTML += `<div class="card">
        <img src="${product.image}" alt="${product.description}" />
        <h1>${product.title}</h1>
        <p class="price">Price: ${product.price}</p>
        <a class="detailButton" href="product.html?id=${product.id}">View details</a>
      </div>`;
    });
  } catch (error) {
    console.error("Error fetching products:", error);

    const resultsContainer = document.querySelector("#container-product");
    resultsContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
  }
}

function handlePageChange() {
  const pathname = window.location.pathname;

  if (pathname === "/women.html") {
    getProductsByGender("Female");
  }

  if (pathname === "/men.html") {
    getProductsByGender("Male");
  }
}

document.addEventListener("DOMContentLoaded", handlePageChange);
window.addEventListener("popstate", handlePageChange);

// async function getProducts(tags, containerId) {
//   try {
//     const response = await fetch(url);

//     if (response.ok !== true) {
//       throw new Error(`HTTP Error! status: ${response.status}`);
//     }

//     const products = await response.json();

//     // Filter products for the given tag
//     const filteredProducts = products.filter(
//       (product) => product.tags && product.tags.includes(tags)
//     );

//     const resultsContainer = document.querySelector(containerId, "#container-product");
//     resultsContainer.innerHTML = "";

//     filteredProducts.forEach(function (product) {
//       resultsContainer.innerHTML += `<div class="card">
//       <img src="${product.image}" alt="${product.description}" />
//     <h1>${product.title}</h1>
//     <p class="price" >Price: ${product.price}</p>
//     <a class="detailButton" href="product.html?id=${product.id}">View details</a>
//   </div>`;
//     });
//   } catch (error) {
//     console.error("Error fetching products:", error);

//     const resultsContainer = document.querySelector(containerId, "#container");
//     resultsContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
//   }
// }

// document.addEventListener("DOMContentLoaded", (event) => {
//   if (window.location.pathname === "/women.html") {
//     getProducts("womens", "#container-product");
//   }

//   if (window.location.pathname === "/men.html") {
//     getProducts("mens", "#container-product");
//   }

//   if (window.location.pathname === "/all.html") {
//     getProducts("jacket", "#container-product");
//   }
// });

// import { url } from "./constants.js";

// async function getProducts(product) {
//   try {
//     const response = await fetch(url);

//     if (response.ok !== true) {
//       throw new Error(`HTTP Error! status: ${response.status}`);
//     }

//     const products = await response.json();
//     const filteredProducts = products.filter(
//       (product) => product.gender === gender
//     );

//     const resultsContainer = document.querySelector("#container-product");
//       resultsContainer.innerHTML = "";
//       resultsContainer.classList.add("product-grid");

//     filteredProducts.forEach(function (product) {
//       resultsContainer.innerHTML += `<div class="card">
//         <img src="${product.image}" alt="${product.description}" />
//         <h1>${product.title}</h1>
//         <p class="price" >Price: ${product.price}</p>
//         <a class="detailButton" href="product.html?id=${product.id}">View details</a>
//       </div>`;
//     });
//   } catch (error) {
//     console.error("Error fetching products:", error);

//     const resultsContainer = document.querySelector("#container-Product");
//     resultsContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
//   }
// }

// if (window.location.pathname === "/women.html") {
//   getProducts("Female", "#container-product");
// }

// if (
//   window.location.pathname === "/men.html") {
//   getProducts("Male", "#container-product");
// }

// if (window.location.pathname === "/all.html") {
//   getProducts("All", "#container-product");
// }

// getProducts();

// import { url } from "./constants.js";

// async function getFemaleProducts() {
//   try {
//       const response = await fetch(url);

//     if (response.ok !== true) {
//       throw new Error(`HTTP Error! status: ${response.status}`);
//     }

//     const products = await response.json();

//     const femaleProducts = products.filter(
//       (product) => product.gender === "Female"
//     );
//     const threeFemaleProducts = femaleProducts.slice(0, 3);

//     const resultsContainer = document.querySelector("#container-product");
//     resultsContainer.innerHTML = "";

//     threeFemaleProducts.forEach(function (product) {
//       resultsContainer.innerHTML += `<div class="card">
//     <img src="${product.image}" alt="${product.description}" />
//     <h1>${product.title}</h1>
//     <p class="price" >Price: ${product.price}</p>
//     <a class="detailButton" href="product.html?id=${product.id}">View details</a>
//   </div>`;
//     });
//   } catch (error) {
//     console.error("Error fetching products:", error);

//     const resultsContainer = document.querySelector("#container");
//     resultsContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
//   }
// }

//  if (window.location.pathname === "/women.html") {
//    getFemaleProducts();
//  }

// async function getMaleProducts() {
//   try {
//       const response = await fetch(url);

//     if (response.ok !== true) {
//       throw new Error(`HTTP Error! status: ${response.status}`);
//     }

//     const products = await response.json();

//     const maleProducts = products.filter(
//       (product) => product.gender === "Male"
//     );
//     const threeMaleProducts = maleProducts.slice(0, 3);

//     const resultsContainer = document.querySelector("#container-product");
//     resultsContainer.innerHTML = "";

//     threeMaleProducts.forEach(function (product) {
//       resultsContainer.innerHTML += `<div class="card">
//     <img src="${product.image}" alt="${product.description}" />
//     <h1>${product.title}</h1>
//     <p class="price" >Price: ${product.price}</p>
//     <a class="detailButton" href="product.html?id=${product.id}">View details</a>
//   </div>`;
//     });
//   } catch (error) {
//     console.error("Error fetching products:", error);

//     const resultsContainer = document.querySelector("#container");
//     resultsContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
//   }
// }

// if (window.location.pathname === "/men.html") {
//   getMaleProducts();
// }

// async function getAllProducts() {
//   try {
//       const response = await fetch(url);

//     if (response.ok !== true) {
//       throw new Error(`HTTP Error! status: ${response.status}`);
//     }

//     const products = await response.json();

//     const resultsContainer = document.querySelector("#container-product");
//     resultsContainer.innerHTML = "";
//     resultsContainer.classList.add("product-grid");

//     const allProducts = products;

//     allProducts.forEach(function (product) {
//       resultsContainer.innerHTML += `<div class="card">
//     <img src="${product.image}" alt="${product.description}" />
//     <h1>${product.title}</h1>
//     <p class="price" >Price: ${product.price}</p>
//     <a class="detailButton" href="product.html?id=${product.id}">View details</a>
//   </div>`;
//     });
//   } catch (error) {
//     console.error("Error fetching products:", error);

//     const resultsContainer = document.querySelector("#container");
//     resultsContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
//   }
// }

// if (window.location.pathname === "/all.html") {
//   getAllProducts();
// }

// getFemaleProducts();
// getMaleProducts();
// getAllProducts();
