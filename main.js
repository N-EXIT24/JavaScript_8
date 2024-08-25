let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let even = [];
let odd = [];

for (let num of array) {
    if (num % 2 == 0) {
        even.push(num);
    } else {
        odd.push(num);
    }
}

console.log('Четные числа:', even);
console.log('Нечетные числа:', odd);
