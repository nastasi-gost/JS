"use strict";

const basket = {};

const products = getProductsObject();

const basketEl = document.querySelector(".basket");
const basketListEl = document.querySelector(".basketList");
const basketCounterEl = document.querySelector(".cartIconWrap span");
const basketTotalValueEl = document.querySelector(".basketTotalValue");

document.querySelector(".cartIconWrap").addEventListener("click", () => {
  basketEl.classList.toggle("hidden");
});

document.querySelector(".featuredItems").addEventListener("click", (event) => {
  const addToCartEl = event.target.closest(".addToCart");
  if (!addToCartEl) {
    return;
  }
  addToBasket(addToCartEl.dataset.id);
  renderBasketContent();
});

basketEl.addEventListener("click", (event) => {
  if (!event.target.classList.contains("productRemove")) {
    return;
  }
  removeFromBasket(event.target.closest(".basketRow").dataset.id);
  renderBasketContent();
});

/**
 * Функция добавляет продукт в корзину.
 * @param {string} id - id продукта.
 */
function addToBasket(id) {
  if (!(id in basket)) {
    basket[id] = {
      id: id,
      name: products[id].name,
      price: products[id].price,
      count: 0,
    };
  }
  basket[id].count++;
}

/**
 * Функция удаяет продукт из корзины.
 * @param {string} id - id продукта.
 */
function removeFromBasket(id) {
  if (basket[id].count <= 1) {
    delete basket[id];
  } else {
    basket[id].count--;
  }
}

/**
 * Функция отрисовывает весь контент корзины.
 */
function renderBasketContent() {
  basketListEl.innerHTML = Object.values(basket).reduce(
    (acc, product) => acc + getBasketProductMarkup(product),
    ""
  );
  basketCounterEl.textContent = getTotalBasketCount().toString();
  basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
}

/**
 * Считает и возвращает количество продуктов в корзине.
 * @return {number} - Количество продуктов в корзине.
 */
function getTotalBasketCount() {
  return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}

/**
 * Считает и возвращает итоговую цену по всем добавленным продуктам.
 * @return {number} - Итоговую цену по всем добавленным продуктам.
 */
function getTotalBasketPrice() {
  return Object.values(basket).reduce(
    (acc, product) => acc + product.price * product.count,
    0
  );
}

/**
 * Функция возвращает разметку товара в корзине.
 * @param {object} product - товар из корзины.
 */
function getBasketProductMarkup(product) {
  return `
    <div class="basketRow" data-id="${product.id}">
      <div>${product.name}</div>
      <div>
        <span class="productCount">${product.count}</span> шт.
      </div>
      <div>${product.price} ₽</div>
      <div>
        <span class="productTotalRow">
          ${(product.price * product.count).toFixed(2)} ₽
        </span>
      </div>
      <div><button class="productRemove">-</button></div>
    </div>
  `;
}
