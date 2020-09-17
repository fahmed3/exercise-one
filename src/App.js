import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import ArticleListing from "./containers/ArticleListing";
import Article from "./containers/Article";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/article/:id">
            <Article />
          </Route>
          <Route path="/">
            <ArticleListing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/* Notes
undefined - this value is not defined, therefore we cannot use it - creates an error
null - this value is equal to 'null' - does not create an error
// about null... if you're using it in an if statement, it will act as false
NaN - You're trying to use a value as a number but it's not a number
-a kind of error technically
*/

/* Code Notes

    <div className="App">
      {
        //brackets are for javascipt code
      }
      <h1> {`${exerciseName} ${exerciseNumber}`}</h1>
    </div>


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

/* 9/15/20

whatever.map((element, i) => (
  console.log(element);
));

^ is the same as:

for (let i = 0; i < whatev.length; i++) {
  console.log(whatever[i]);
}


switch(path) {
  case '/article':
    return <Article />;
  case '/':
    return <ArticleListing />:
  default:
    return null;
}


function CoolFunction() {
  const text = 'words';
  return AnotherFunction(text);
}
function AnotherFunction(argument){
  console.log(argument) //string words
  console.log(text) //undefined
  return argument;
}


*/
