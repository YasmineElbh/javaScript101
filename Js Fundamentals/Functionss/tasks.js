/**
 * Rewrite the function using '?' or '||'
 * function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
 */
function checkAge(age)
{
   return (age > 18) ? true : confirm('Did parents allow you?');
}

// using ||

function checkAge(age)
{
    return (age > 18) || confirm('Did parents allow you?');
}

/**
 * Function min(a, b)
 */
function min(a, b)
{
    if (a < b)
        return a;
    else
        return b;
}

/**
 * Function pow(x,n)
 */

function pow(x, n)
{
    let result = x;
    for (let i = 0; i < n; i++)
    {
        result *= x;
    }
    return result;
}
let x = prompt('give me the x value', '');
let n = prompt('gve me the value n', '');
if (n < 1)
    alert('use a positive value');
else
    alert(pow(x, n));