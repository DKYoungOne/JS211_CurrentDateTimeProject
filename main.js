// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const convertNumToString = (num) => String(num);

// Write a JavaScript program to convert a string to the number.

const convertStringToNum = (string) => Number(string);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const dataTypeIdentify = (data) => {
  console.log(typeof data)
  return typeof data;
};
  
// Write a JavaScript program that adds 2 numbers together.

const add = (num1, num2) => Number(num1) + Number(num2);

// Write a JavaScript program that runs only when 2 things are true.
// Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true. 
//I ordered it like this to help with the program I am writing, which compares two fields and their contents on the DOM
const fieldsFilledResult = document.getElementById('fields-filled-result');

const noneTrue = (a, b) => !a.value && !b.value ? fieldsFilledResult.innerHTML = 'You do not have any fields filled!' : console.log('error');
const oneTrue = (a, b) => a.value || b.value ? fieldsFilledResult.innerHTML = 'One field filled!' : noneTrue(a, b);
const twoTrue = (a, b) => a.value && b.value ? fieldsFilledResult.innerHTML = 'Both fields filled!' : oneTrue(a, b);




 



// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

//Addition and convert num to string demo, the convertstringtonum function is used in the original add function as well
const addNumbers = (num1, num2) => {
const sum = add(num1, num2)
  document.getElementById('display-addition').innerHTML = 'Result: ' + String(sum);
  console.log(sum);
}
const addForm = document.getElementById('addForm');
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const num1 = document.getElementById('num1').value;
  console.log(num1);
  const num2 = document.getElementById('num2').value;
  console.log(num2);
  addNumbers(num1, num2);
});

//Using the data type indentifier
const whatIsThis = document.getElementById("whatIsThis");
const dataTypeForm = document.getElementById('dataTypeForm');
dataTypeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const dataType = dataTypeIdentify(whatIsThis.value);
  document.getElementById("display-data-type").innerHTML = dataType;
})

//Fields Filled JS
const fieldsFilled = document.getElementById('fieldsFilled');
fieldsFilled.addEventListener("submit", (e) => {
  e.preventDefault();
  const a = document.getElementById('field1');
  const b = document.getElementById('field2');
  twoTrue(a, b);
})


// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
