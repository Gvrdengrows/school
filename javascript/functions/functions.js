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

consoleErin();
consoleMao();
arrow();

// Задание: объявить две функции: стрелочную и декларейшн функцию которые будет делать консоль лог.
// И нужно вызвать эти функции
