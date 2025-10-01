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
    document.addEventListener("ProductPageLoaded", () => {
      const content = document.getElementById("content");

      const productDiv = document.getElementById("products-list");

      const productBox = document.createElement("div");
      productBox.className = "product-box";
      productDiv.appendChild(productBox);

      const title = document.createElement("h2");
      title.textContent = this.name;
      productBox.appendChild(title);

      const price = document.createElement("p");
      price.textContent = `$${this.price.toFixed(2)}`;
      productBox.appendChild(price);

      const desc = document.createElement("p");
      desc.textContent = this.description;
      productBox.appendChild(desc);

      const img = document.createElement("img");
      img.src = this.imageUrl;
      img.alt = this.name;
      productBox.appendChild(img);

      productDiv.appendChild(productDiv);

      // Remove cart functionality for now or implement cart logic
      // const addButton = document.createElement("button");
      // addButton.textContent = "Add to Cart";
      // addButton.onclick = () => this.addToCart(cart);
      // productDiv.appendChild(addButton);
    });
  }
}

// an array to hold products
// ...existing code...
const products = [
  new Product(
    "Example Product",
    19.99,
    "This is an example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Another Product",
    29.99,
    "This is another example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Third Product",
    39.99,
    "This is the third example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Fourth Product",
    49.99,
    "This is the fourth example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Fifth Product",
    59.99,
    "This is the fifth example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Sixth Product",
    69.99,
    "This is the sixth example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Seventh Product",
    79.99,
    "This is the seventh example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Eighth Product",
    89.99,
    "This is the eighth example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Ninth Product",
    99.99,
    "This is the ninth example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Tenth Product",
    109.99,
    "This is the tenth example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Eleventh Product",
    119.99,
    "This is the eleventh example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Twelfth Product",
    129.99,
    "This is the twelfth example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Thirteenth Product",
    139.99,
    "This is the thirteenth example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  ),
  new Product(
    "Fourteenth Product",
    149.99,
    "This is the fourteenth example product.",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg"
  )
];
// ...existing code...

products.forEach((product) => product.display());
