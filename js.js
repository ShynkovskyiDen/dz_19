// 1
// let i = 10;
// let j = 20;
// for (i, j; i < j; i++) {
//     document.write(`${i}, `);
// } if (i = j) {
//     document.write(`${i}.`);
// }

// 2
// for (i, j; i < j; i++) {
//     document.write(`${i**2}, `);
// } if (i = j) {
//     document.write(`${i**2}.`);
// }

// 3
// for (i = 1, j = 10; i < j; i++) {
//     document.write(`${i*7}, `);
// } if (i = j) {
//     document.write(`${i*7}.`);
// }

// 4
// sum = 0;
// for (i = 1, j = 15; i <= j; i++) {
//     sum += i;
// }
// document.write(sum);

// 5

// let mul = 1;
// for (i = 15, j = 35; i <= j; i++) {
//     mul *= i;
// }
// document.write(mul);

// 6
// let sum = 0;
// for (i = 1, j = 500; i <= j; i++) {
//     sum += i;
// }
// document.write(sum/500);

// 7
// let sum = 0;
// for (i = 30, j = 80; i <= j; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
// }
// document.write(sum);

// 8
// for (i = 100, j = 200; i <= j; i++) {
//     if (i % 3 == 0) {
//         document.write(`${i}, `);
//     }
// }

// 9
// let number1 = +prompt('Введіть натуральне число');

// if (number1 > 0) {
//     for (number2 = 1; number2 <= number1; number2++) {
//         if (number1 % number2 == 0) {
//             document.write(`${number2}, `);
//         }
//     }
// } else {
//     alert(`Place number above 0`);
// }

// 10
// let number1 = +prompt('Введіть натуральне число');

// if (number1 > 0) {
//     for (let number2 = 1; number2 <= number1; number2++) {
//         if (number1 % number2 == 0) {
//                 if (number2 % 2 == 0) {

//                     document.write(`${number2}, `);
//                 }
//         }
//     }
// } else {
//     alert(`Place number above 0`);
// }


// 11
// let number1 = +prompt('Введіть натуральне число');
// let sum = 0;

// if (number1 > 0) {
//     for (let number2 = 1; number2 <= number1; number2++) {
//         if (number1 % number2 == 0) {
//                 if (number2 % 2 == 0) {
//                     sum += number2;
//                 }
//             }
//         }
//     } else {
//         alert(`Place number above 0`);
//     }
//     document.write(`${sum}`);

// 12
// let n = 10;
// let i, j;
// let table = [];

// for(i = 1; i <= n; i++) {
//     table[i] = [];
//     for(j = 1; j <= n; j++) {
//         table[i][j] = Math.round(i*j);
//         document.write(`${table[i][j]}&nbsp; &nbsp; &nbsp;`);
//     }
//     document.write('<br>');
// }

// 13
// let i = 20; 
// let j = 30;

// for (i = 20; i <= j; i += 0.5) {
//     document.write(`${i}, `)
// }



// 14

// let dollar;
// for (dollar=10; dollar <= 100; dollar++) {
//     let hryvna = 27*dollar;
//     document.write(`${hryvna}, `);
// }

// 15
// let number1 = +prompt('Введіть ціле число');

// let i;

// if (number1 % 1 == 0) {
//     for (i = 1; i <= 100; i++) {
//         if (i*i <= number1) {
//             document.write(`${i}, `);
//         }
//     }
// } else {
//     alert(`Будь ласка, введіть число без залишку`);
// }

// 16
// let number1 = +prompt('Введіть ціле число');


// for (let i = 2; i <= number1; i++) {
//     if (number1 % i == 0) {
//         document.write(`${number1} -  число не є простим`);
//         break;
//     } else {
//         document.write(`${number1} -  число просте`);
//         break;
//     }
// }

// 17

// let number1 = +prompt('Введіть ціле число');
// let i;
// let result;

// while (number1 % 3 == 0) {
//     number1 /= 3;
// }
// document.write(`${number1 == 1 ? "Число можна отримати" : "Число неможна отримати"}`);


