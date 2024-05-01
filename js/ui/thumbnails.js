export function thumbnails(products, container) {
    const resultsContainer = document.querySelector(container);
    products.forEach(function (product) {
        resultsContainer.innerHTML += `
    <img class="spin" src="${product.images[0].thumbnail}" alt="${product.description}" />
  </div>
</a>`;
    });
}
