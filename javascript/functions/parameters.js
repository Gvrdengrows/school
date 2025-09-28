// То что лежит в круглых скобках называется параметрами
function consoleCat(name, age) {
    console.log("У кошки " + name + " столько лет " + age)
}

consoleCat("Эрин", 5);
consoleCat("Мао", 1)


// Задание: написать функцию которая принимает параметры 
// вкус сока и миллитры и выводит об этом информаци
function consoleSok(vkus, ml) {
    console.log("У сока вкус такой " + vkus + " и столько миллилитров " + ml);
}

consoleSok("Cola", 500);
consoleSok("Orange", 1000);