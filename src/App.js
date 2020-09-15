import React from "react";

import "./App.css";

function App() {
  const exerciseNumber = `One`;
  const exerciseName = `Exercise`;
  return (
    <div className="App">
      {
        //brackets are for javascipt code
      }
      <h1> {`${exerciseName} ${exerciseNumber}`}</h1>
    </div>
  );
}

/*
undefined - this value is not defined, therefore we cannot use it - creates an error
null - this value is equal to 'null' - does not create an error
// about null... if you're using it in an if statement, it will act as false
NaN - You're trying to use a value as a number but it's not a number
-a kind of error technically
*/

export default App;

/* Notes
//Arrays
const coolArray = ["cool", "array"];
let coolArray = ["cooler", "array"];

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
const lengthOfArray = numberArray.length; //8
numberArray.push(9);

const fourthValue = numberArray[3];

//Objects
// { key : value }
const coolObject = { val1: `val1`, val2: "val2" };

let newValue = coolObject.val1;
let anotherValue = coolObject.val2;
let thirdValue = coolObject.val3; //equals... undefined

const userData = { name: "james", age: `infinite`, dogName: "Artemis" };

const introText = `Hello, ${userData.name}`;

//JSON
const coolArray = [
  {
    val1: "hi",
    val3: null,
    val4: () => {
      return "hi";
    },
  },
  {
    val1: "hi",
  },
  {
    val1: "hi",
    val2: "hello",
  },
];

//Date
const newDate = Date().now; // 3:31 September 10, 2020
const coolMinutes = newDate.getMinute(); //31
const coolMinutes = newDate.getHours(); // 3
*/
