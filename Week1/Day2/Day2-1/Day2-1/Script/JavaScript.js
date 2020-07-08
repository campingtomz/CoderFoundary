//(function () {
document.getElementById('all').addEventListener('click', calculateAll);
document.getElementById('fizzBuzBtn').addEventListener('click', fizzBuzz);
document.getElementById('palindrome-button').addEventListener('click', palindrome);

    function convertUserInput() {
        let input = document.getElementById('user-input').value.split(',').map(Number);
        return input;
    };

    function calculateAll() {
        let numArr = convertUserInput();
        let max = Number.MIN_VALUE;
        let min = Number.MAX_VALUE;
        let sum = 0;
        let product = 1;
        for (let number of numArr) {
            max = Math.max(max, number);
            min = Math.min(min, number);
            sum += parseFloat(number);
            product *= parseFloat(number);
        }
        let mean = (sum / numArr.length).toFixed();
        output(max, min, mean, sum, product);
    };
    function output(max, min, mean, sum, product) {
        document.getElementById('max-value').innerText = `${max}`;
        document.getElementById('min-value').innerText = `${min}`;
        document.getElementById('mean-value').innerText = `${mean}`;
        document.getElementById('sum-value').innerText = `${sum}`;
        document.getElementById('product-value').innerText = `${product}`;
    };

function palindrome() {
    let palindromeInput = document.getElementById('palindrome').value;
    let reverseInput = palindromeInput.split("").reverse().join("");
    if (palindromeInput.localeCompare(reverseInput) === 0) {
        document.getElementById('palindrome-output').innerText = `The word "${palindromeInput}" is a Palindrome`;
    } else {
        document.getElementById('palindrome-output').innerText = `The word ${palindromeInput} is not a Palindrome`;
    }
}

function fizzBuzz() {
    let number1 = document.getElementById('inputNum1').value;
    let number2 = document.getElementById('inputNum2').value;
    let resValues = [];
    for (let i = 1; i < 101; i++) {
        if (i % number1 === 0 && i % number2 === 0) {
            resValues.push("fizzbuzz");
        }
        else if (i % number1 === 0) {
            resValues.push("fizz");
        }
        else if (i % number2 === 0) {
            resValues.push("buzz");
        }
        else {
            resValues.push(`${i}`);
        }
    }
    fizzbuzz(resValues);
}
function fizzbuzz(values) {
    let table = document.getElementById('myTable');
    console.log("test");
    for (let i = 0; i < values.length; i++) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = `${i+1}`;
        cell2.innerHTML = `${values[i]}`
    }
};
