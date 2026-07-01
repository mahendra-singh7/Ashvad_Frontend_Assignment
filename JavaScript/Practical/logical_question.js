//1.Reverse Array

let numbers = [10, 20, 30, 40, 50];
numbers.reverse();
console.log(numbers);

//2.Sum of Two Numbers

let num1 =10;
let num2 =20;
let sum=num1+num2
console.log(sum);


// 3. Largest in Array

let numbers = [10,20,40,23,21,54,76,75];
let largest = numbers[0];
for(let i=1; i< numbers.length; i++){
    if(numbers[i]> largest){
        largest = numbers[i];
    }
}
console.log(largest);


// 4. Palindrome

let str = "madam";

let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}



// 5. Count Vowels

let str = "Hello World";
let vowels = "aeiouAEIOU";
let count = 0;

for (let char of str) {
  if (vowels.includes(char)) {
    count++;
  }
}

console.log("Total vowels:", count);



// 9. Character & Word Counter

let name="Mahendra Singh Mahara";
let charCount = name.length;
let wordCount = name.split(" ").length;
console.log("Total Character Count:- ", charCount);
console.log("Total Words Count:- ", wordCount);

