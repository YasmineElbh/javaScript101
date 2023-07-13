<**Object references and copying**>

Here we put a copy of message into phrase:
let message = "Hello!";
let phrase = message;

==>A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

//Example
let user = {
  name: "John"
};

==>The object is stored somewhere in memory (at the right of the picture), while the user variable (at the left) has a “reference” to it.

We may think of an object variable, such as user, like a sheet of paper with the address of the object on it.

When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks at what’s at that address and performs the operation on the actual object.

Now here’s why it’s important.

When an object variable is copied, the reference is copied, but the object itself is not duplicated.

<**Comparison by reference**>

==>Two objects are equal only if they are the same object.
//Example
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

!--<**Const object can be modiied**>
Example:
const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete


<**Cloning and merging, Object.assign**>
So, copying an object variable creates one more reference to the same object.

But what if we need to duplicate an object?

We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.

let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object

<**We can also use the method**>
The syntax is:

Object.assign(dest, ...sources)

The first argument dest is a target object.
Further arguments is a list of source objects.
It copies the properties of all source objects into the target dest, and then returns it as the result.

For example, we have user object, let’s add a couple of permissions to it:

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true
If the copied property name already exists, it gets overwritten:

let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }
We also can use Object.assign to perform a simple object cloning:

let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30
Here it copies all properties of user into the empty object and returns it.

<***Nested cloning**>
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one

<**Structured Clone**>

The call structuredClone(object) clones the object with all nested properties.

Here’s how we can use it in our example:

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related
The structuredClone method can clone most data types, such as objects, arrays, primitive values.

It also supports circular references, when an object property references the object itself (directly or via a chain or references).

For instance:

let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone); // true
As you can see, clone.me references the clone, not the user! So the circular reference was cloned correctly as well.

Although, there are cases when structuredClone fails.

