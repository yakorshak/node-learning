//Установите Node.js с сайта программы. Повторите действия урока.

console.log('Если вы это видите - то сделали!!!');

// Task 2. Напишите функцию f2, которая принимает 2 числа и выводит и возвращает максимальное из них. Для этого используйте Math.

const f2 = (a, b) => {
    let maxValue = Math.max(a, b);
    console.log(maxValue);

    return maxValue;
}

f2(3, 5);

// Task 3. Напишите функцию f3, которая выводит и возвращает случайное число от 0 до 10.

const f3 = () => {
    let randomValue = Math.random() * 10;
    randomValue = Math.floor(randomValue);
    console.log(randomValue);

    return randomValue;
}

f3();

// Task 4. Напишите функцию f4, которая выводит и возвращает случайное число от a до b.

const f4 = (a, b) => {
    let randomValue = Math.floor( Math.random() * (b - a) ) + a;
    console.log(randomValue);

    return randomValue;
}

f4(1, 5);

// Тask 5. Напишите фукнцию f5, которая выводит и возвращает текущую дату в формате год-месяц-день. Причем делает это с ведущим нулем.
// Пример 2020-03-22

const f5 = () => {
    let date = new Date( Date.now() ); 
    let Y = date.getFullYear();
    let M = addZero( date.getMonth() + 1 );
    let D = date.getDate();
    let currentUserDate = Y + '-' + M + '-' + D;

    console.log(currentUserDate);

    return currentUserDate;
}

function addZero(value) { 
    return (value < 10) ? '0' + value : value;
}

f5();

//Task 6. Напишите функцию f6, которая проверяет является ли введенный год високосным. Возвращает true если да, и false если нет. 

function isInteger(year) {
    if (Number.isInteger(year)){
        return true;
    } else {
        return false;
    }
}

const f6 = (year) => {
    let result = (year / 4); // если введенный год делится на 4 без остачи - год высокосный
    let boolenResult = isInteger(result);
    
    return boolenResult;
}

console.log( f6(1998) );


