function showMessage(from, text)
{
    from = '*' + from + '*';
    alert(from + ':' + text);
}
let from = 'Ann';
showMessage(from, 'hello');

// default values
function msg(frm, txt = "no txt given")
{
    alert(frm + ": " + txt);
}
msg("Ann");

// example 2
function checkAge(age)
{
    if (age >= 18)
        return true;
    else
        return confirm("do you have permision ffom your parents?")
}

let age = prompt("how old are you?", 18);
if (checkAge(age))
    alert('access gramted');
else
    alert('access demied');