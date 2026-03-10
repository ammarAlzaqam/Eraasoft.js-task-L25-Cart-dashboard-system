// TODO>> Show Products
let tableBody = document.querySelector("table tbody");
const jsonProducts = localStorage.getItem("products");
const products = JSON.parse(jsonProducts);

showProducts = () => {
  tableBody.innerHTML = "";
  products.forEach((el, i) => {
    tableBody.innerHTML += `
      <tr>
          <td>${i + 1}</td>
          <td>${el.name}</td>
          <td>${el.price}</td>
          <td>
              <img class="object-fit-cover rounded-circle" height="50" width="50"
                  src="${el.img.startsWith("https") ? "" : "."}${el.img}" alt="product-img">
          </td>
          <td>
            <div class="d-flex gap-2">
              <button class="btn btn-warning" onclick="editProduct(${i})"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
              <button class="btn btn-danger" onclick="removeProduct(${i})"><i class="fa-solid fa-eraser"></i> Remove</button>
            </div>
          </td>
      </tr>
    `;
  });
};
showProducts();

// TODO>> Add New Product
let productNameInput = document.querySelector("#productNameInput");
let productBrandInput = document.querySelector("#productBrandInput");
let productPriceInput = document.querySelector("#productPriceInput");
let productImgURLInput = document.querySelector("#productImgURLInput");

let addNewProduct = (e) => {
  e.preventDefault();
  let product = {
    name: productNameInput.value,
    brand: productBrandInput.value,
    price: productPriceInput.value,
    img: productImgURLInput.value,
  };
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  let modal = bootstrap.Modal.getInstance(
    document.getElementById("AddNewProductModal"),
  );
  modal.hide();
  productNameInput.value = "";
  productBrandInput.value = "";
  productPriceInput.value = "";
  productImgURLInput.value = "";

  showProducts();
};

// TODO>> Edit product
let productNameEditInput = document.querySelector("#productNameEditInput");
let productBrandEditInput = document.querySelector("#productBrandEditInput");
let productPriceEditInput = document.querySelector("#productPriceEditInput");
let productImgURLEditInput = document.querySelector("#productImgURLEditInput");

let modalElement = document.querySelector("#editProductModal");
let modal = new bootstrap.Modal(modalElement);

let editProduct = (i) => {
  history.replaceState({}, "", `?index=${i}`);

  productNameEditInput.value = products[i].name;
  productBrandEditInput.value = products[i].brand;
  productPriceEditInput.value = products[i].price;
  productImgURLEditInput.value = products[i].img;
  modal.show();
};

let handelEditProduct = (e) => {
  e.preventDefault();
  let params = new URLSearchParams(location.search);
  let i = params.get("index");

  let product = {
    name: productNameEditInput.value,
    brand: productBrandEditInput.value,
    price: productPriceEditInput.value,
    img: productImgURLEditInput.value,
  };

  products[i] = product;
  localStorage.setItem("products", JSON.stringify(products));
  showProducts();
  modal.hide();
};

let removeProduct = (i) => {
  let checkRemove = confirm(`Are you shore to remove ${products[i].name}.`);
  if (checkRemove) {
    products.splice(i, 1);
    console.log(products);
    localStorage.setItem("products", JSON.stringify(products));
    showProducts();
  }
};
