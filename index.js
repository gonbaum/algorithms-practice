// Hackerank print staircases, normal and right aligned

const makeStairs = (n) => {
  const line = Array(n).fill("a");

  for (let i = n - 1; i >= 0; i--) {
    line[i] = "#";
    console.log(line.join(""));
  }
};

const stairCase = (n) => {
  for (let i = n - 1; i >= 0; i--) {
    let step = "#";
    for (j = i; j <= n - i; j++) {
      step = step + "#";
    }
    console.log(step);
  }
};

function simpleStaircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}

function simpleStaircaseR(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i));
  }
}

// Hackerank Birthday Cake Candles problem

function birthdayCakeCandles(candles) {
  candles = candles.sort();
  return candles.filter((candle) => candle === candles[candles.length - 1]);
}

// Convert 12hs time to 24hs time. timeConversion('07:00:45PM')

function timeConversion(str) {
  let parsedStr = str.split("");
  let [hours, minutes, secs] = parsedStr.slice(0, 8).join("").split(":");
  const daytime = parsedStr.slice(-2).join("");

  if (hours === "12") {
    hours = "00";
  }
  if (daytime === "PM") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}:${secs}`;
}

// Remove even numbers from array. console.log(removeEven([1,2,3,4,5,6,7,8,9]))

const removeEven = (arr) => {
  let filteredArr = arr.filter((e) => e % 2 !== 0);
  return filteredArr;
};

// or

const removeEven2 = (arr) => {
  let odd = [];
  for (let number of arr) {
    if (number % 2 !== 0) {
      odd.push(number);
    }
  }
  return odd;
};

// Rotate to the left n times. console.log(rotateLeft([1,2,3], 1))

const rotateLeft = (arr, times) => {
  for (let i = 1; i <= times; i++) {
    let firstElement = arr.shift();
    arr.push(firstElement);
  }
  return arr;
};

//Reverse an array. console.log(reverseArray2([1,2,3,4]))

const reverseArray = (arr) => {
  return arr.reverse();
};

//or

const reverseArray2 = (arr) => {
  let arr2 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // reverse loop to push into a new array every arr item from the last one to the first one
    arr2.push(arr[i]);
  }
  return arr2;
};

// Reverse a String

// 1- ES6: use split to convert into array and  reverse to revert it, then join

const getReversedStrES6 = (str) => {
  return str.split("").reverse().join("");
};

// OR

const getReversedStr3 = (str) => {
  return [...str].reverse().join("");
};

// 2- Oldfashioned: we could split into an array and create an inverse loop to create a new array with reversed elements, then join and retunr string

const getReversedStr = (str) => {
  let strArr = str.split(""); // split the String into a new array
  let strArr2 = []; // initialize array for reversed string
  for (i = strArr.length; i >= 0; i--) {
    strArr2.push(strArr[i]); // push elements from the last one the first one into new array
  }
  return strArr2.join("");
};

// Create a function that will merge two arrays and return the result as a new array

const mergeArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
};

// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

const getSetArray = (arr1, arr2) => {
  return [...new Set(arr1.concat(arr2))];
};

// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

const arr1 = [1, 2, 3];
const arr2 = [1, 4, 5];

const getUniqueElements = (arr1, arr2) => {
  let unique = arr1.filter((x) => {
    if (arr2.includes(x)) {
      return true;
    }
  });
  console.log(unique);
};

//Multiply by factory function (Closure) .  console.log(multiplyBy5(5))

const multiplyBy = (x) => {
  return function (y) {
    return x * y;
  };
};

const multiplyBy5 = multiplyBy(5);

// IIFE + Closure to make a Counter.  Call counter several times: console.log(counter())

const counter = (() => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
})();

// Find object in an Array of objects. console.log(find(3))

const Users = [
  { name: "Gonzalo", surname: "Garcia", _id: 1 },
  { name: "Mariela", surname: "Calcaterra", _id: 2 },
  { name: "Jorge", surname: "Garcia", _id: 3 },
  { name: "Emilio", surname: "Garcia", _id: 4 },
];

const getUserById = (user, id) => {
  return user._id === id;
};

let find = (id) => Users.find((user) => getUserById(user, id));

// Add object to array creating a new id by adding 1 from last object's id

const addUser = (name, surname) => {
  const newId = Users[Users.length - 1]._id + 1;
  const Object = { name: name, surname: surname, _id: newId };
  Users.push(Object);
};

// Get Fibonacci serie of n size

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

const getFibonacci = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(fibonacci(i));
  }
};

// Some Junior interview exercises

// build a function that recreates the map method  (array) => n * 2 // console.log(map(arr, fun))

let arr = [1, 2, 3];

const head = (array) => array[0];
const rest = (array) => array.slice(1, array.length);

const fun = (e) => e * 2;

// recursive solution here:

const map = (array, fun) => {
  if (!array.length) {
    return [];
  }
  return [fun(head(array)), ...map(rest(array), fun)];
};

// Transform uppercase to lowercase and viceversa // console.log(getInversedCase(str1))

const str1 = "TeNerIfE!";

const getInversedCase = (str) => {
  let newStr = str.split("").map((char) => {
    if (char === char.toLowerCase()) {
      return char.toUpperCase();
    }
    return char.toLowerCase();
  });
  return newStr.join("");
};

console.log("Hello world in pandemics, this a practice document");
