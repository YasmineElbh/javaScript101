<**Objects**>
objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

[200~An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

/Example
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

//we can add, remove and read any files from it at any time
<!--add-->
user.name;
<!--remove-->
delete user.name;

<**We can also use multiword property names, but then they must be quoted:**>
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

<!--another example-->
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];
!==>Now everything is fine. Please note that the string inside the brackets is properly quoted (any type of quotes will do).


//Example
let user = {
    name : "john",
    age : 30
};

let key = prompt("what do you wanna now about the user?", "name");//access by variable
alert( user[key]); //john (if enter "name" otherwise 30 if enter age)

<**Computed properties**>
We can use square brackets in an object literal, when creating an object

//example
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.
So, if a visitor enters "apple", bag will become {apple: 5}.

<**Property value shorthand**>
In real code, we often use existing variables as values for property names.

//Example
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

<!--Instead of name:name we can just write name, like this:-->

function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}

<**Property existence test, “in” operator**>
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
==>Why does the in operator exist? Isn’t it enough to compare against undefined?
Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.

//StrongExample
let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!

<**the for .. in**>
syntaxe:
for (key in object) {
  // executes the body for each key among object properties
}

//Example:

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
==>Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here.
Also, we could use another variable name here instead of key. For instance, "for (let prop in obj)" is also widely used.




<**Summary**>

Objects are associative arrays with several special features.
They store properties (key-value pairs), where:
Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:
The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
Additional operators:
To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.
What we’ve studied in this chapter is called a “plain object”, or just Object.
There are many other kinds of objects in JavaScript:
Array to store ordered data collections,
Date to store the information about the date and time,
Error to store the information about an error.
…And so on.
They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.
