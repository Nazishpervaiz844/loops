// no1: sum all the array elements by using a loop 

// Creating array
let arr = [4, 8, 7, 13, 12]

// Creating variable to store the sum
let sum = 0;

// Running the for loop
for (let i = 0; i < 5; i++) {
    sum += arr[i];
}

console.log("Sum is: " + sum)


//NO2:  reverse the array by using for loop
var array = [4, 8, 7, 13, 12]

var reversed_Array = []

for(let i = array.length - 1; i >= 0; i--) {
  var valueAtIndex = array[i]
  
  reversed_Array.push(valueAtIndex)
}

console.log("Reversed_Array is: "+ reversed_Array)

// // NO3: MAKE A TABLE OF GIVEN NUMBER IN ALL POSSIBLE LOOPS

// //  USING FOR LOOP
for(var i = 1;i<=10;i++)
{
    console.log("TABLE of: ");
}
var tableNo = parseInt(prompt("Please Enter Table No"));
var tableLimit = parseInt(prompt("Please Enter table limit "));
for (let j = 1; j <= tableLimit; j++) {
  console.log(`${tableNo} * ${j} = ${tableNo*j}`);
}

// // USING WHILE LOOP
const number = 4;
let k = 1;

console.log(`Multiplication table for ${number}`);

while (k <= 4) {
  console.log(`${number} * ${k} = ${number * k}`);
  k++;
}

// // USING DO- WHILE LOOP

const numb = 5;
let n = 1;

console.log(`Multiplication table for ${numb}`);

do {
  
  console.log(`${numb} * ${i} = ${numb * n}`);
  n++;
} while (n <= 5);



// no4  find a largest number in an array 


function findLargestNumber(arr) {
 
  let largest = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; 
    }
  }

  return largest;
}

const numbers = [34, 12, 56, 78, 23, 9];
const largestNumber = findLargestNumber(numbers);
console.log("Largest number:", largestNumber);

// no5  find a smallest number in an array 

var ar = [42,25,9,15,7];
		var smallest = ar[0];

		for(var i=1; i<arr.length; i++){
			if(ar[i] < smallest){
				smallest = ar[i];   
			}
		}

		console.log("smallest number :" , smallest);
