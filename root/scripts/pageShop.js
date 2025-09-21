class Product {
  constructor(name, price, description, imageUrl) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  addToCart(cart) {
    cart.addProduct(this);
  }

  display() {
    document.addEventListener("DOMContentLoaded", () => {
      const content = document.getElementById("content");
      const productDiv = document.createElement("div");

      const title = document.createElement("h2");
      title.textContent = this.name;
      productDiv.appendChild(title);

      const price = document.createElement("p");
      price.textContent = `$${this.price.toFixed(2)}`;
      productDiv.appendChild(price);

      const desc = document.createElement("p");
      desc.textContent = this.description;
      productDiv.appendChild(desc);

      const img = document.createElement("img");
      img.src = this.imageUrl;
      img.alt = this.name;
      productDiv.appendChild(img);

      content.appendChild(productDiv);
    });

    // Remove cart functionality for now or implement cart logic
    // const addButton = document.createElement("button");
    // addButton.textContent = "Add to Cart";
    // addButton.onclick = () => this.addToCart(cart);
    // productDiv.appendChild(addButton);
  }
}

// an array to hold products
const products = [
  new Product(
    "Example Product",
    19.99,
    "This is an example product.",
    "https://via.placeholder.com/150"
  ),
  new Product(
    "Another Product",
    29.99,
    "This is another example product.",
    "https://via.placeholder.com/150"
  ),
  new Product(
    "Third Product",
    39.99,
    "This is the third example product.",
    "https://via.placeholder.com/150"
  ),
  new Product(
    "Fourth Product",
    49.99,
];

products.forEach((product) => product.display());
