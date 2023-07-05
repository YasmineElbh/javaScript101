/**
 * For every loop iteration, write down which value it outputs and then compare it with the solution.
 */
let y = 0;
while (++y < 5) alert( y );// 1 to 4
/**
 * The first value is i = 1, because ++i first increments i and then returns the new value. So the first comparison is 1 < 5 and the alert shows 1.↳

Then follow 2, 3, 4… – the values show up one after another. The comparison always uses the incremented value, because ++ is before the variable.
Finally, i = 4 is incremented to 5, the comparison while(5 < 5) fails, and the loop stops. So 5 is not shown.
 */

let i = 0;
while (i++ < 5) alert( i );// 1 to 5
/**
 * The first value is again i = 1. The postfix form of i++ increments i and then returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).
But the alert call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current i = 1.
Then follow 2, 3, 4…

Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here we have the postfix form i++. So it increments i to 5, but returns the old value. Hence the comparison is actually while(4 < 5) – true, and the control goes on to alert.
The value i = 5 is the last one, because on the next step while(5 < 5) is false.
 */

/**
 * Use the for loop to output even numbers from 2 to 10.
 */
let numbers;
for (numbers = 2; numbers <= 10; numbers++)
{
        alert(numbers);
}

//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
let x = 0;
while(x < 3)
{
    alert(`number ${x}!` );
    x++;
}

/**
 * Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
 */
let num;
do{
    num = prompt("enter the number greater than 100");
}
while(num <= 100)

//Output prime numbers
let numberr;

for(numberr = 2; numberr <= 10; numberr++)
{
    let nextprime = true;
    for(let j = 2; j < i; j++)
    {
        if(numberr % j == 0)
            nextprime = false;
            break;
    }
    if (nextprime)
        alert(numberr);
}