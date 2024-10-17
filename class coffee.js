
 
alert("ДОБРО ПОЖАЛОВАТЬ! ☕\n\nЯ КОФЕ-БОТ БОРИС 😊\n\nСЛЕДУЙ ПОЖАЛУЙСТА ИНСТРУКЦИЯМ НА ЭКРАНЕ 📋");


const priceBig = 300;
const priceMedium = 200;
const priceSmall = 100;

// Определение ингредиентов
const ingr1 = "сахар";
const ingr2 = "кофе";
const ingr3 = "молоко";
const ingr4 = "коньяк";
const ingr5 = "шоколад";

// Класс Coffee
class Coffee {
  constructor(name, size, price, recipe) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.recipe = recipe;
  }

  getInfo() {
    return `Выбранный кофе: ${this.name}<br>Размер: ${this.size}<br>Рецепт: ${this.recipe}<br>Стоимость: ${this.price} золотых  монет`;
  }
}

// Функция для запроса типа кофе с рецептами и ценами
function getCoffeeType() {
  while (true) {
    let cafeType = prompt(
      'ДОБРО ПОЖАЛОВАТЬ!\n' +
      'Введите номер кофе: \n' +
      '1. "ARABICA"  (Рецепт: сахар, кофе) \n' +
      '2. "LATTE"    (Рецепт: сахар, кофе, молоко) \n' +
      '3. "MOCHA"    (Рецепт: сахар, кофе, шоколад) \n' +
      '4. "COFFEE WITH BRANDY"  (Рецепт: сахар, кофе, коньяк)'
    );

    if (cafeType === null || cafeType === "") {
      alert("Ошибка: Ввод не должен быть пустым.");
    } else if (cafeType === "1" || cafeType === "2" || cafeType === "3" || cafeType === "4") {
      return cafeType;
    } else {
      alert("Ошибка: Неизвестный тип кофе");
    }
  }
}

// Функция для запроса размера кофе чере promt
function getCoffeeSize() {
  while (true) {
    let cafeSize = prompt('ДОБРО ПОЖАЛОВАТЬ! Введите номер размера кофе: \n 1. "Big" \n 2. "Small" \n 3. "Medium"');

    if (cafeSize === null || cafeSize === "") {
      alert("Ошибка: Ввод не должен быть пустым.");
    } else if (cafeSize === "1" || cafeSize === "2" || cafeSize === "3") {
      return cafeSize; 
    } else {
      alert("Ошибка: Неизвестный размер кофе, попробуйте снова.");
    }
  }
}

// Функция для получения названия и рецепта кофе
function getCoffeeInfo(cafeType) {
  let name, recipe;

  switch (cafeType) {
    case "1":
      name = "Arabica";
      recipe = `${ingr1}, ${ingr2}`;
      break;
    case "2":
      name = "Latte";
      recipe = `${ingr1}, ${ingr2}, ${ingr3}`;
      break;
    case "3":
      name = "Mocha";
      recipe = `${ingr1}, ${ingr2}, ${ingr3}, ${ingr5}`;
      break;
    case "4":
      name = "Coffee with Brandy";
      recipe = `${ingr1}, ${ingr2}, ${ingr4}`;
      break;
  }

  return { name, recipe }; 
}

// стоимость кофе
function getPrice(cafeSize) {
  if (cafeSize === "1") {
    return priceBig;
  } else if (cafeSize === "2") {
    return priceSmall;
  } else if (cafeSize === "3") {
    return priceMedium;
  }
}

// Основной код
let cafeType = getCoffeeType();  
let cafeSize = getCoffeeSize();  

let coffeeInfo = getCoffeeInfo(cafeType); 
let price = getPrice(cafeSize); 
// Размер 
let size;
switch (cafeSize) {
  case "1":
    size = "Big";
    break;
  case "2":
    size = "Small";
    break;
  case "3":
    size = "Medium";
    break;
}


const coffee = new Coffee(coffeeInfo.name, size, price, coffeeInfo.recipe);

// Итоговое сообщение
let finalMessage = coffee.getInfo();

// Отображаем сообщение в div
document.getElementById("coffeeMessage").innerHTML = finalMessage;


