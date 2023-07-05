The "do while":
The condition check can be moved below the loop body using the do..while syntax:        do {
  // loop body
} while (condition);

The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.and it execute at least once.

the "while loop":
While the condition is truthy, the code from the loop body is executed.
  while (condition) {
  // code
  // so-called "loop body"
}

"Labels for break/continue":
Sometimes we need to break out from multiple nested loops at once.
We need a way to stop the process if the user cancels the input.
syntax:
   labelName: for (...) {
  ...
   }
//Example 'without label':
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

alert('Done!');
//'with label':
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
==>In the code above, break outer looks upwards for the label named outer and breaks out of that loop.
So the control goes straight from (*) to alert('Done!').


