let productsFromLocalStorage = localStorage.getItem("products");
if (!productsFromLocalStorage) {
  let products = [
    {
      name: "iPhone X",
      price: 400,
      brand: "iPhone",
      img: "./images/products/iPhoneX.jpg",
    },
    {
      name: "iPhone 12",
      price: 500,
      brand: "iPhone",
      img: "./images/products/iPhone12.jpg",
    },
    {
      name: "iPhone 13",
      price: 650,
      brand: "iPhone",
      img: "./images/products/iPhone13.jpg",
    },
    {
      name: "iPhone 17 Pro Max",
      price: 1200,
      brand: "iPhone",
      img: "./images/products/iPhone17.jpg",
    },
    {
      name: "Samsung S24",
      price: 850,
      brand: "Samsung",
      img: "./images/products/samsungGalaxyS24.jpg",
    },
    {
      name: "Samsung S25",
      price: 950,
      brand: "Samsung",
      img: "./images/products/samsungGalaxyS25.jpg",
    },
    {
      name: "Samsung S26",
      price: 1150,
      brand: "Samsung",
      img: "./images/products/samsungGalaxyS26.jpg",
    },

    {
      name: "iPhone 11",
      price: 500,
      brand: "iPhone",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg",
    },
    {
      name: "iPhone 12 Pro",
      price: 820,
      brand: "iPhone",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg",
    },
    {
      name: "iPhone 13 Pro",
      price: 1050,
      brand: "iPhone",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg",
    },
    {
      name: "iPhone 14",
      price: 950,
      brand: "iPhone",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-1.jpg",
    },
    {
      name: "iPhone 14 Pro",
      price: 1200,
      brand: "iPhone",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    },
    {
      name: "iPhone 15",
      price: 1100,
      brand: "iPhone",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
    },
    {
      name: "iPhone 15 Pro",
      price: 1350,
      brand: "iPhone",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
    },

    {
      name: "Samsung Galaxy S21",
      price: 750,
      brand: "Samsung",
      img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-5g-1.jpg",
    },

    {
      name: "Oppo Find X3",
      price: 650,
      brand: "Oppo",
      img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x3-pro-1.jpg",
    },
    {
      name: "Oppo Find X5",
      price: 750,
      brand: "Oppo",
      img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x5-pro-1.jpg",
    },
    {
      name: "Oppo Find X6",
      price: 900,
      brand: "Oppo",
      img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x6-pro-1.jpg",
    },
    {
      name: "Oppo Reno 8",
      price: 550,
      brand: "Oppo",
      img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno8-1.jpg",
    },

    {
      name: "Huawei P50",
      price: 850,
      brand: "Huawei",
      img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p50-1.jpg",
    },
    {
      name: "Huawei P60",
      price: 950,
      brand: "Huawei",
      img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p60-pro-1.jpg",
    },
    {
      name: "Huawei Mate 40",
      price: 900,
      brand: "Huawei",
      img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-mate40-pro-1.jpg",
    },
  ];

  localStorage.setItem("products", JSON.stringify(products));
}

let cartFromLocalStorage = localStorage.getItem("cart");
if (!cartFromLocalStorage) localStorage.setItem("cart", JSON.stringify([]));

// Data (Model) => |m| v c
