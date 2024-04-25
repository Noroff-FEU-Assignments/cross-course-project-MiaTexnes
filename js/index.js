const url =
    'https://cors.noroff.dev/https://miatexnes.com/rainydays/wp-json/wc/v3/' // Replace with your domain
const consumerKey = 'ck_72a9ee68ddfc8e8b75af76f8665f066eef1468fb'
const consumerSecret = 'cs_044d1da18354755a282314535eab6e3c2c5f0e1c'

fetch(url, {
  method: 'GET',
  headers: {
    Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`
  }
})
  .then((response) => {
    if (response.ok !== true) {
      throw new Error(`HTTP Error! status: ${response.status}`)
    }
    return response.json()
  })
  .then((products) => {
    const resultsContainer = document.querySelector('#container-product')
    resultsContainer.innerHTML = ''
    resultsContainer.classList.add('product-grid')

    const firstThreeProducts = products

    firstThreeProducts.forEach(function (product) {
      resultsContainer.innerHTML += `
    <a href="product.html?id=${product.id}">
      <div class="card">
        <img src="${product.image.src}" alt="${product.description}" />
        <h1>${product.name}</h1>
        <p class="price">Price $: ${product.price}</p>
      </div>
    </a>`
    })
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error:', error)
  })

// import { url } from './constants.js'

// async function getProducts () {
//   try {
//     const response = await fetch(url)

//     if (response.ok !== true) {
//       throw new Error(`HTTP Error! status: ${response.status}`)
//     }

//     const products = await response.json()

//     const resultsContainer = document.querySelector('#container-product')
//     resultsContainer.innerHTML = ''
//     resultsContainer.classList.add('product-grid')

//     const firstThreeProducts = products.slice(0, 3)

//     firstThreeProducts.forEach(function (product) {
//       resultsContainer.innerHTML += `
//     <a   href="product.html?id=${product.id}">
//       <div class="card">
//         <img src="${product.image}" alt="${product.description}" />
//         <h1>${product.title}</h1>
//         <p class="price">Price $: ${product.price}</p>
//         <p class="detailButton">View details</p>
//       </div>
//     </a>
//   `
//     })
//   } catch (error) {
//     console.error('Error fetching products:', error)

//     const resultsContainer = document.querySelector('#container')
//     resultsContainer.innerHTML = '<p>Failed to load products. Please try again later.</p>'
//   }
// }

// getProducts()
