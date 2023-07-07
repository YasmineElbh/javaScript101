Quite often we need to perform a similar action in many places of the script.
For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.↳

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.

suntaxe:
function showMessage() {
  alert( 'Hello everyone!' );
}

// functions with parameters
function name(parameter1, parameter2, ... parameterN) {
 // body
}

//Example
function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
==>Our new function can be called by its name: showMessage().

//Local variables
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function
==>A variable declared inside a function is only visible inside that function.

//Outer variables
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John

==>A function can access an outer variable as well

//It is possible to use return without a value. That causes the function to exit immediately.↳

For example:
function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true

<!!!!---Never add a newline between return and the value-->


