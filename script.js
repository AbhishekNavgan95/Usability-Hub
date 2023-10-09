navHoverMenuOne();
navHoverMenuTwo();

function navHoverMenuOne() {
  const products = document.querySelector(".product");
  const productMenu = document.querySelector(".hover-product-menu");
  products.addEventListener("mouseenter", () => {
    productMenu.style.display = "flex";
  });
  products.addEventListener("mouseleave", () => {
    productMenu.style.display = "none";
  });
  productMenu.addEventListener("mouseover", () => {
    productMenu.style.display = "flex";
  });
  productMenu.addEventListener("mouseleave", () => {
    productMenu.style.display = "none";
  });
}

function navHoverMenuTwo() {
  const resources = document.querySelector(".resources");
  const productMenu2 = document.querySelector(".hover-product-menu2");
  resources.addEventListener("mouseenter", () => {
    productMenu2.style.display = "flex";
  });
  resources.addEventListener("mouseleave", () => {
    productMenu2.style.display = "none";
  });
  productMenu2.addEventListener("mouseover", () => {
    productMenu2.style.display = "flex";
  });
  productMenu2.addEventListener("mouseleave", () => {
    productMenu2.style.display = "none";
  });
}
