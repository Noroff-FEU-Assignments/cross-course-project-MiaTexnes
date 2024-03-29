import { getQueryStringParam } from "./helpers/getQueryStringParam.js";
import { url } from "./constants.js";

async function getProduct() {
  const id = getQueryStringParam("id");

  if (!id) {
    document.location.href = "/";
  }

  const productUrl = `${url}/${id}`;

  try {
    const response = await fetch(productUrl);

    if (response.ok === false) {
      throw new Error("There was an error fetching the product with id: " + id);
    }

    const product = await response.json();

    document.title = `${product.title} - RainyDays`;

    const resultsContainer = document.querySelector("#container-product");

    // Create a dropdown menu for sizes
    let sizeOptions = "";
    if (product.sizes && product.sizes.length) {
      sizeOptions = `<select id="product-sizes" name="sizes">`;
      for (const size of product.sizes) {
        sizeOptions += `<option value="${size}">${size}</option>`;
      }
      sizeOptions += `</select>`;
    } else {
      sizeOptions = `<p>No sizes available</p>`;
    }

    resultsContainer.innerHTML = `<div class="cardSpecific">
    <img class="product-image" src="${product.image}" alt="${product.description}" />
    <div class="product-text">
      <h1>${product.title}</h1>
      <p>Price: ${product.price}</p>
      <h2>Description: ${product.description}</h2>
      <p>Gender: ${product.gender}</p>
      <p>Color: ${product.baseColor}</p>
      <p>Size: ${sizeOptions}</p>
    </div>
    </div>`;
  } catch (error) {
    const resultsContainer = document.querySelector("#container-product");
    resultsContainer.innerHTML = `<p class="error">${error}</p>`;
  }
}

getProduct();
