// Learning Reduce

// Syntaxis

// 1. Reduce - це функція, яка застосовує певну функцію щодо аккумулятора та кожного елементу масиву.
// 2. Reduce - зводить усі елементи масиву до одного значення, цим значенням може бути будь-що, того типу даних, що вказаний у initialValue.
// 3. Reduce - приймає два аргументи - функцію callback та initialValue. Функція callback завжди має повертати значення,
//  оскільки значення, яке повертаєтсья визначає нове значення акумулятора. Повинен бути return.


/*
const array = [1, 2, 3, 4, 5];

array.reduce((accumulator, currentValue, index, array) => {
        return {some code}
}, initialValue);
*/


// 1. Getting sum of elements

const array = [1, 2, 3, 4, 5];

const newArray = array.reduce((accumulator, currentValue, index, array) => {
    // console.log(`accumulator -`, accumulator);
    return accumulator + currentValue;
}, 0);

// Iteration 1: 0 + 1 = 1
// Iteration 2: 1 + 2 = 3
// Iteration 3: 3 + 3 = 6
// Iteration 4: 6 + 4 = 10
// Iteration 5: 10 + 5 = 15

// console.log(newArray);


// 2. Change array into object

const array2 = ["John", "Mathew", "Sara"];

const newArray2 = array2.reduce((accumulator, currentValue, index, array) => {
    // console.log(`accumulator -`, accumulator);
    return {
        ...accumulator,
        [index]: currentValue,
    };
}, {});

console.log(newArray2);

// Iteration 1: {} 0 {} "John" => {0: "John"}
// Iteration 2: {0: "John"} 1 "Mathew" => {0: "John",1: "Mathew", }
// Iteration 3: {0: "John", 1: "Mathew", } 2 "Sara" => {0: "John",1: "Mathew", 2: "Sara"}


// 3. 