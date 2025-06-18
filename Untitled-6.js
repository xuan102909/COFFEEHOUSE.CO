const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Iced Latte",
    price: 15,
    colors: [
      {
        code: "#3e2723",
        img: "./img/iced_latte_1.png",
      },
      {
        code: "#4e342e",
        img: "./img/iced_latte_2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Matcha Latte",
    price: 15,
    colors: [
      {
        code: "#a5d6a7",
        img: "./img/matcha_1.png",
      },
      {
        code: "#81c784",
        img: "./img/matcha_2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Americano",
    price: 12,
    colors: [
      {
        code: "#6d4c41",
        img: "./img/americano_1.png",
      },
      {
        code: "#5d4037",
        img: "./img/americano_2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Strawberry Matcha Latte",
    price: 16,
    colors: [
      {
        code: "#ef9a9a",
        img: "./img/strawberry_matcha_1.png",
      },
      {
        code: "#e57373",
        img: "./img/strawberry_matcha_2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Affogato",
    price: 17,
    colors: [
      {
        code: "#d7ccc8",
        img: "./img/affogato_1.png",
      },
      {
        code: "#a1887f",
        img: "./img/affogato_2.png",
      },
    ],
  },
  {
    id: 6,
    title: "Rose Latte",
    price: 15,
    colors: [
      {
        code: "#f8bbd0",
        img: "./img/rose_latte_1.png",
      },
      {
        code: "#f48fb1",
        img: "./img/rose_latte_2.png",
      },
    ]
  }  
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenProduct = products[index];
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});