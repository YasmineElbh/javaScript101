/**
 * alert: This one we’ve seen already. It shows a message and waits for the user to press “OK”.
 * prompt: It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
 * confirm: The function confirm shows a modal window with a question and two buttons: OK and Cancel.The result is true if OK is pressed and false otherwise.
 */

//Examples
alert("Hello");

let age = prompt('How old are you?', 50);
alert(`You are ${age} years old!`);

let isBoss = confirm("Are you the boss");
alert(isBoss);