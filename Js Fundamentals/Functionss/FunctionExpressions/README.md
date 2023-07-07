In JavaScript, a function is not a “magical language structure”, but a special kind of value.
The syntax that we used before is called a Function Declaration:
          function sayHi() {
               alert( "Hello" );
           }

//There is another syntax for creating a function that is called a Function Expression.
It allows us to create a new function in the middle of any expression.
For example:
            let sayHi = function() {
                alert( "Hello" );
            };
Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }.
As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.
<!!Please note, there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.>

//Why is there a semicolon at the end?

function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};

==>The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.
The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment.

//Callback functions
Let’s look at more examples of passing functions as values and using function expressions.
We’ll write a function ask(question, yes, no) with three parameters:
question
Text of the question
yes
Function to run if the answer is “Yes”
no
Function to run if the answer is “No”
The function should ask the question and, depending on the user’s answer, call yes() or no():

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

<**We can use Function Expressions to write an equivalent, shorter function:**>
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

<**Function Expression vs Function Declaration**>
// Function Declaration
function sum(a, b) {
  return a + b;
}
==> A Function Declaration can be called earlier than it is defined.
For example, a global Function Declaration is visible in the whole script, no matter where it is.
That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.
And after all Function Declarations are processed, the code is executed. So it has access to these functions.

// Function Expression
let sum = function(a, b) {
  return a + b;
};
==>A Function Expression is created when the execution reaches it and is usable only from that moment.

Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

<!--When to choose Function Declaration versus Function Expression?-->
==>As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.
That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.
…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.
