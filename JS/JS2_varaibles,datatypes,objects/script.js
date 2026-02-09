console.log("Variables are container to store some value");
// var is globally scoped
// const is used if you never want to alter the value of the variable by mistake
const pi = 3.14;
var a = 5;
var b = 7;
var c = "Suman";
var _a = "Pun";
// var 23a not allowed
// use the let in modern js as it automatically behave like var if defined out side the blocks and like block scoped if defined inside the block

let s = "hello";

console.log(a + b);
console.log(typeof a, typeof b, typeof c);
console.log(c + " " + _a);

// let and const are block scoped
// var is globally scoped

{
  let a = 666;
  console.log(a);
  // this a has scope inside this block only
}
//DATATYPES IN JS

let x = "Suman hello";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof p);
console.log(typeof q);
console.log(typeof r);

//OBJECTS IN JS

// key value pairs separated by comma and can be added as line 55 and objects can be functions , variables
let o = {
  name: "suman",
  job: "programmer",
  is_present: "true",
};
// printing the object

console.log(o);
// adding the key value pair in existing object
o.salary = "1 Lakh";
console.log(o);

// accessing the specific key value pair
// can be done with dot and bracket notation
console.log(o.name);
console.log(o["is_present"]);

//multiple objects can be stored using the array of objects
let user = [
  {
    name: "suman",
    job: "programmer",
    is_present: true,
  },
  {
    name: "hari",
    job: "programmer",
    is_present: true,
  },
];

// add update and delete objects

user.name = "ram";
user.job = "HR";

// delete user.name;

console.log(user);
//updating
if ((user.name = "ram")) {
  user.job = "Manager";
}
// adding the objects to an array of objects

user.push({
  name: "Samir",
  job: "programmer",
  is_present: true,
});
user.unshift({
  name: "alex",
  job: "designer",
  is_present: false,
});
console.log(user);
