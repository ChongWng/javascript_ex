/* 
  index.js
*/

"use strict";
//x = 3.14;       // This will cause an error because x is not declared


var msg = "hello JavaScript";
console.log(msg);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from JavaScript</p>";

/* JS types */
console.log("---------------JS types---------------");
console.log("msg is " + typeof(msg));
console.log("resultsDiv is " + typeof(resultsDiv));

var none;
console.log("none is " + typeof(none));

var aNumber = 10;
console.log("aNumber is " + typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is " + typeof(trueFalse));



/* JS conditions */
console.log("---------------JS conditions---------------");
if (none == undefined) {
  console.log("none is undefined #1");
} 
if (!none) {
  console.log("none is undefined #2");
} 

//var will be converted to the type that is comparable in this situation
if (aNumber == "10") { 
  console.log("10 is 10 #1");
}

if (aNumber === "10") {  //exactly equal
  console.log("10 is 10 #2");
}




/* JS functions */
console.log("---------------JS functions---------------");
// function showMsg(msg) {
//   console.log("showMsg: " + msg);
// }

//Overloading: There is only one function for each name
function showMsg(msg, more) {
  if (more) {
    console.log("showMsg+ " + msg + more);
  } else {
    console.log("showMsg+ " + msg);
  }
}

showMsg("some information");
showMsg("more information", " and even more");

//A JavaScript function can also be defined using an expression.
//an anonymous function (a function without a name).
var showIt = function (msg) {
  console.log(msg);
}

showIt("Some message");

function showItThen(msg, callback) {
  showIt(msg);
  callback();
}

showItThen("showItThen called", function () {
  console.log("callback called");
});



/* JS scopes and closures */
console.log("---------------JS scopes and closures---------------");
var inGlobal = true;

testMe(); //execution can be anywhere

function testMe() {
  console.log("testMe(): " + inGlobal);

  var someMsg = "some Message";
  console.log("testMe(): " + someMsg);

  showItThen("with Closure", function () {
    showIt("testMe With Closure(): " + someMsg);
  });

}

//console.log("global: " + someMsg); //someMsg here outside the function



/* JS objects and arrays */
console.log("---------------JS objects and arrays---------------");
var result = {
  name: "jQuery 1",
  language: "JavaScript",
  score: 4.5,
  showLog: function () {

  },
  owner: {
    login: "chong",
    id: 123456
  }
};

result.phoneNumber = "123-456-7890";

console.log(result.owner);
console.log(result.phoneNumber);
console.log(result);

//-----------

var results = [{
  name: "jQuery 2",
  language: "JavaScript",
  score: 4.5,
  showLog: function () {

  },
  owner: {
    login: "chong",
    id: 123456
  }
}, {
  name: "jQuery 3",
  language: "JavaScript",
  score: 3.5,
  showLog: function () {

  },
  owner: {
    login: "wang",
    id: 123456
  }
}];


console.log("The length of array: " + results.length);
console.log(results[0].name);

results.push(result); //add item
results.push({
  name: "dummy project"
});

console.log("The length of the new array: " + results.length);
console.log(results[3].name);



/* JS looping */
console.log("---------------JS looping---------------");

for (var x = 0; x < results.length; x++) {
  var result = results[x];
  if (result.score < 4) continue;
  console.log(result.name);  
}



