//TODO>> Render Data
let productsDiv = document.querySelector("#productsDiv");

const jsonProducts = localStorage.getItem("products");
const products = JSON.parse(jsonProducts);
const jsonCart = localStorage.getItem("cart");
let cart = JSON.parse(jsonCart);

let showProducts = (products) => {
  productsDiv.innerHTML = "";
  products.forEach((p, i) => {
    productsDiv.innerHTML += `
        <div class="col-4">
            <div class="card p-3 shadow">
                <img class="card-img-top object-fit-contain" height="300"
                    src="${p.img}"
                    alt="product-img">
                <div class="card-body pb-0">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="card-text mb-3">Price : $ ${p.price}</p>
                    <a href="#" class="btn btn-primary col-12" onclick="addToCart(${i})">Add to cart</a>
                </div>
            </div>
        </div>
    `;
  });
};
showProducts(products);

//TODO> >Render Cart Products
let tableBody = document.querySelector("table tbody");
let totalProductsPrice = document.querySelector("#totalProductsPrice");

let showCart = () => {
  tableBody.innerHTML = "";
  totalProductsPrice.textContent = 0;
  cart.forEach(({ name, price, qty }, i) => {
    tableBody.innerHTML += `
      <tr>
          <td>${i + 1}</td>
          <td>${name}</td>
          <td>${price} $</td>
          <td class="d-flex align-items-center gap-3">
              <button class="btn btn-danger" onclick="decreaseQty(${i})">-</button>
              <p>${qty}</p>
              <button class="btn btn-success" onclick="increaseQty(${i})">+</button>
          </td>
          <td>${price * qty} $</td>
      </tr>
    `;

    // TODO>> Calc total.
    totalProductsPrice.textContent =
      +totalProductsPrice.textContent + price * qty;
  });
};
showCart();

//TODO>> Add to cart functionality & Change qty
let addToCart = (i) => {
  let product = products[i];
  let cartProduct = cart.find(
    (cartEl) =>
      cartEl.name.trim().toLowerCase() == product.name.trim().toLowerCase(),
  );

  if (cartProduct) {
    cartProduct.qty++;
  } else {
    product.qty = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
};

let increaseQty = (i) => {
  cart[i].qty++;
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
};

let decreaseQty = (i) => {
  pQty = cart[i].qty;

  if (pQty > 1) cart[i].qty--;
  else {
    cart.splice(i, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
};

//TODO>> Filter products
let filterProducts = (brandName) => {
  if (brandName == "all") showProducts(products);
  else {
    let filteredProducts = products.filter((p) => p.brand == brandName);
    if (filteredProducts.length != 0) {
      showProducts(filteredProducts);
    } else {
      productsDiv.innerHTML = `<p class="text-black">No products...</p>`;
      console.log(filteredProducts);
    }
  }
};

//TODO>> Filter products
let searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", (e) => {
  let searchText = e.target.value;
  let filteredProducts = products.filter((p) =>
    p.name.trim().toLowerCase().includes(searchText.trim().toLowerCase()),
  );
  showProducts(filteredProducts);
});
// controller => m v |c|
