// Функции объявляются по разному:
// function declarations.
function consoleErin() {
  console.log("Erin");
}

// function expression
const consoleMao = function () {
  console.log("Mao");
};

// Arrow function. Стрелочная функция
const arrow = () => {
  console.log("Arrow");
};

// Так вызываются функции: сперва название функции и потом круглые скобки, они отвечают за сам вызов
consoleErin();
consoleMao();
arrow();

// Задание: объявить две функции: стрелочную и декларейшн функцию которые будет делать консоль лог.
// И нужно вызвать эти функции
const arrow1 = () => {
  console.log("addarrow");
}
function consoleBarsik() {
  console.log("Addbarsik")
}
arrow1()
consoleBarsik()