//(function () {
document.getElementById('all').addEventListener('click', calculateAll);
document.getElementById('fizzBuzBtn').addEventListener('click', fizzBuzz);
document.getElementById('palindrome-button').addEventListener('click', palindrome);
document.getElementById('factorialBtn').addEventListener('click', factorial);

    function convertUserInput() {
        let input = document.getElementById('user-input').value.split(',').map(Number);
        for (number of input) {
            if (isNaN(number)) {
                document.getElementById('user-input').value = "";
                input = false;
            }
        }
        return input;
    };

    function calculateAll() {
        let numArr = convertUserInput();
        console.log(numArr);
        if (!numArr) {
            window.alert("Please enter a valid value!");
        } else {
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
        }
    };
    function output(max, min, mean, sum, product) {
        document.getElementById('max-value').innerText = `${max}`;
        document.getElementById('min-value').innerText = `${min}`;
        document.getElementById('mean-value').innerText = `${mean}`;
        document.getElementById('sum-value').innerText = `${sum}`;
        document.getElementById('product-value').innerText = `${product}`;
    };

function checkiFWord() {
    let palindromeInput = document.getElementById('palindrome').value.replace(/[^a-zA-Z\" "]/g, '').trim();

    if (palindromeInput.indexOf(' ') === -1) {
        return palindromeInput.toLowerCase();
    }
    else {
        window.alert(`Please enter a valid single word "${palindromeInput}" is not Valid `);
        return false;
    }
}

function palindrome() {
    let palindromeInput = checkiFWord();
    if (palindromeInput != false) {
        let reverseInput = palindromeInput.split("").reverse().join("");
        if (palindromeInput.localeCompare(reverseInput) === 0) {
            document.getElementById('palindrome-output').innerText = `The word "${palindromeInput}" is a Palindrome`;
        } else {
            document.getElementById('palindrome-output').innerText = `The word "${palindromeInput}" is not a Palindrome`;
        }
    } 
}

function factorial() {
    let factorialInput = document.getElementById('factorialInput').value;
    let value = false;
    if (isNaN(factorialInput)) {
        window.alert(`Please enter valid number`);
    } else {
        if (factorialInput < 0) {
            window.alert(`Please enter a number greater than Zero`);
        }
        else if (factorialInput === 0) {
            value = 1;
        }
        else {
            let product = 1;
            for (let i = factorialInput; i > 1; i--) {
                product *= i;
            }
            value = product;
        }
    }
    factorialOutput(value);
}

function factorialOutput(value) {
    if (value != false) {
        document.getElementById('factorial-output').innerText = `${value}`;
    }
}
function fizzBuzz() {
    let number1 = document.getElementById('inputNum1').value;
    let number2 = document.getElementById('inputNum2').value;
    if (isNaN(number1) || isNaN(number2)) {
        window.alert(`Please enter valid numbers`);
    } else {
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
}
function fizzbuzz(values) {
    let table = document.getElementById('myTable');
    for (let i = 0; i < values.length; i++) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = `${i+1}`;
        cell2.innerHTML = `${values[i]}`
    }
};
/*
  let word;
  let reverseWord;
  for(int i = 0; i< word.length, i++){
    reverseWord.push(word[word.length -1-i]);
}
 */