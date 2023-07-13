//copied
let user = {
    name: 'yasmine'
};
let admin = user; // copy the refernce

let user =
{
    name: 'john'
};
let admin = user;
admin . name = 'pete';//changed by the admin reference
alert(user.name);//'pete'

//comparison
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

//example 2
let a = {};
let b = {}; // two independent objects

alert( a == b ); // false

//Cloning and merging, Object.assign
let usr = {
    name: 'john',
    age: 30
};
let clone = {};//new empty project

for (let key in user)
{
    clone[key] = user[key];
}
clone.name = 'pete'; // changed the data

alert(user.name);//still john

//Object.assign
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }


//Nested cloning
let user = {
    name: 'john',
    sizes:{
        height: 182,
        width: 50
    }
};
alert( user.sizes.height ); // 182

//structuredClone
let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = structuredClone(user);
  
  alert( user.sizes === clone.sizes ); // false, different objects
  
  // user and clone are totally unrelated now
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 50, not related