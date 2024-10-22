const addProduct = () => {
  const productFiled = document.getElementById("product-name");
  const quentityFiled = document.getElementById("product-quantity");
  const product = productFiled.value;
  const quentity = quentityFiled.value;
  productFiled.value = "";
  quentityFiled.value = "";

  displayProduct(product, quentity);
  saveProductToLocalStorage(product, quentity);
  console.log(product, quentity);
};

const displayProduct = (product, quentity) => {
  const listContainer = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerHTML = `
  <p>${product} :  ${quentity} </p>
  `;
  listContainer.appendChild(li);
};

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quentity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quentity;
  const catrStringified = JSON.stringify(cart);
  localStorage.setItem("cart", catrStringified);
  console.log(catrStringified);
};

const displayProductFromLocalStorage = () => {
  const saveCart = getStoredShoppingCart();
  console.log(saveCart);
  for (const product in saveCart) {
    const quentity = saveCart[product];
    displayProduct(product, quentity);
    console.log(product, quentity);
  }
};
displayProductFromLocalStorage();
