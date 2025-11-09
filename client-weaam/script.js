// Fetch products from JSON Server API
async function fetchProducts() {
  const response = await fetch("http://localhost:4000/products");
  const products = await response.json();
  return products;
}

async function renderProducts() {
  const container = document.getElementById("product-container");
  const products = await fetchProducts();

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h2>${product.name}</h2>
      <p><strong>${product.price}</strong></p>
      <p>${product.description}</p>
    `;
    container.appendChild(card);
  });
}

renderProducts();