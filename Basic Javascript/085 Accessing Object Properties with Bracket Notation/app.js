//second way to access the properties of an object is bracket notation ([])

//If the property of the object you are trying to access has a space in its name, 
        //you will need to use bracket notation.

            //you can still use bracket notation on object properties without spaces.

/*
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

*/

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line
  