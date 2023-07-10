"use strict";
/**
 * Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
 */

let user = {};
user.name = "john",
user.surname = "smith"
user.name = "pete";
delete user.name;

//Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let res = 0;
for (let sum in salaries)
{
    res += salaries[sum];
}
alert(sum);

//Multiply numeric property values by 2
manu = {
    width: 400,
    height: 600,
    title: "Mymenu"
};
function multiplyNumeric(obj){
    for(let mult in manu)
    {
        if(typeof(obj[mult]) == "number")
        {
            obj[mult] *= 2;
        }
    }
}