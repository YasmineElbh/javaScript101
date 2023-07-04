/**
 * unary: the unary negation - reverses the sign of a number:
 * binary: An operator is binary if it has two operands. The same minus exists in binary form as well
 */

//Example of unary
let x = 1;

x = -x;
alert( x ); 

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

//Example of binary
let z = 1, y = 3;
alert( y - z); 

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
