import { url } from "./constants.js";

async function getProducts(gender, containerId) {
  try {
    const response = await fetch(url);

    if (response.ok !== true) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    const products = await response.json();
    const filteredProducts = products.filter((product) =>
      gender.includes(product.gender)
    );

    const resultsContainer = document.querySelector("#container-product");
    resultsContainer.innerHTML = "";
    resultsContainer.classList.add("product-grid");

    filteredProducts.forEach(function (product) {
      resultsContainer.innerHTML += `<div class="card">
        <img src="${product.image}" alt="${product.description}" />
        <h1>${product.title}</h1>
        <p class="price" >Price: ${product.price}</p>
        <a class="detailButton" href="product.html?id=${product.id}">View details</a>
      </div>`;
    });
  } catch (error) {
    console.error("Error fetching products:", error);

    const resultsContainer = document.querySelector(containerId);
    resultsContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
  }
}

if (window.location.pathname === "/women.html") {
  getProducts(["Female"], "#container-product");
}

if (window.location.pathname === "/men.html") {
  getProducts(["Male"], "#container-product");
}

if (window.location.pathname === "/kids.html") {
  getProducts(["Male", "Female"], "#container-product");
}

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

// if (window.location.pathname === "/kids.html") {
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

// if (window.location.pathname === "/kids.html") {
//   getAllProducts();
// }

// getFemaleProducts();
// getMaleProducts();
// getAllProducts();
