//Sum numbers from the visitor
let num1 = +prompt("enter first number","");
let num2 = +prompt("enter second number","");
alert(num1+num2);

/**
 * According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.
 */
alert(Math.round(6.35.toFixed(1)));

//Repeat until the input is a number
function readNumber(num)
{
    let num;

    if(num == null)
    {
        return null;
    }
    else{
        do{
            num = prompt("enter a number", 0);
        }
        while( !isFinite(num));
    }

}