/**
 * Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
 */

let qst = prompt('What is the “official” name of JavaScript?', );
    if (qst == "ECMAScript")
        alert("Right!");
    else
        alert("You don’t know? ECMAScript!");

/**
 * Using if..else, write the code which gets a number via prompt and then shows in alert:
1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
 */

let value = prompt("type a number", -1);
    if (value > 0)
        alert( 1 );
    else if(value < 0)
        alert( -1 ) ;
    else
        alert( 0 );

/**
 * Rewrite this if using the conditional operator '?':
 */
let result = (a + b <4) ? 'below' : 'over';

/**
 * Rewrite if..else using multiple ternary operators '?'.
For readability, it’s recommended to split the code into multiple lines.
 */

let message = (login == 'employee') ? 'hello' :
(login == 'Director') ? 'greetings' :
(login == '') ? 'no login' : '';
