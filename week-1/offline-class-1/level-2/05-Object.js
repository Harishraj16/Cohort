// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property"); //this(hasOwnProperty) will return a true/false always!
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);


/*
Explanation of the code:
Line 1: Checking property existence with hasOwnProperty:

JavaScript
let hasProp = obj.hasOwnProperty("property");
Use code with caution. Learn more
This line checks if the object obj has a property named "property" using the hasOwnProperty method. This method only checks for properties directly attached to the object and not inherited from its prototype chain.

Example:

JavaScript
const obj = {
  name: "John",
  age: 30,
};

let hasNameProp = obj.hasOwnProperty("name"); // true
let hasAgeProp = obj.hasOwnProperty("age"); // true
let hasPrototypeProp = obj.hasOwnProperty("toString"); // false
Use code with caution. Learn more
Line 2: Printing the result of hasOwnProperty:

JavaScript
console.log("After hasOwnProperty():", hasProp);
Use code with caution. Learn more
This line simply prints the value of the hasProp variable to the console. In the above example, it would print true.

Line 3: Creating a new object with Object.assign:

JavaScript
let newObj = Object.assign({}, obj, { newProperty: "newValue" });
Use code with caution. Learn more
This line uses the Object.assign method to create a new object named newObj. It takes three arguments:

An empty object as the first argument, which serves as the target object to which new properties will be assigned.
The obj object as the second argument, which is the source object from which properties will be copied.
An object literal containing a new property named newProperty with the value "newValue" as the third argument.
Line 4: Printing the new object:

JavaScript
console.log("After Object.assign():", newObj);
Use code with caution. Learn more
This line prints the newly created newObj to the console. In the example, it would print:

{
  name: "John",
  age: 30,
  newProperty: "newValue"
}
Summary:

hasOwnProperty checks if a specific property exists directly on an object.
Object.assign creates a new object by merging properties from another object and adding new ones.
This code demonstrates how to check for property existence and dynamically create new objects with additional properties in JavaScript.
*/