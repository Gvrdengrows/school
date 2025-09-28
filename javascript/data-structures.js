// Объект:
// В этом случае asd является КЛЮЧОМ, а fsdf является значением
// У object1 есть поле asd. Объекты состоят из полей
const object1 = {
  asd: "fsdf",
  sdfs: 13123,
};
// Обращение к полям объекта происходит через точку.
// Здесь выведется fsdf.
console.log(object1.asd);

// Можно еще обращаться к полям через квадратые скобки.
// Здесь выведется 13123
console.log(object1["sdfs"]);

// Массив: это можно сказать список. Он состоит из ЭЛЕМЕНТОВ
// Отчет массива начинается с 0.
let array1 = [1, "sdf", object1];

// К элементам массива мы обращаемся через ИНДЕКС.
console.log(array1[0]);

const objectCats = {
  mao: "1",
  erin: "5",
  // Бориса еще нет
  boris: null,
};
console.log(objectCats.erin);
// Не объявлен барсик
console.log(objectCats.barsik);
console.log(objectCats["mao"]);

let arraycats = ["Mao", "Erin"];
console.log(arraycats[1]);
