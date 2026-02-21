 async function sleep() {
    return new Promise((resolve, reject)=>{
setTimeout(()=>{
    resolve(45);
},1000)

    })
 }
(async function main()
{
   
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)

}
)() // this is IIFE ie immediately invoked function :
// it runs as sooon as it it defined 
// it is used to avoid polluting the global namespace and for to execute the async await 

// var a1 due to hoisting so donto show error but value of the a1 is not tranferred so result to undefined 

console.log(a1);
// console.log(a2); this result in error as only var suuports hoisting 
// DESTRUCTING 
function one (){

    let x,y =[1,3]
    console.log(x,y)
}
function two(){

    let [x,y] =[1,3]
    console.log(x,y)
}
function three (){

    let [x,y] =[1,3,7]
    console.log(x,y)
}
function four (){

    let [x,y,rest] =[1,3,7,8,9,10]
    console.log(x,y,rest)
}
function five (){

    let [x,y, ...rest] =[1,3,7,8,9,10]  // ... is spread operator 
    console.log(x,y,rest)
}
one()
two()
three()
four()
five()


// destructing can be done in objects too

let obj ={
    a:1,
    b:2,
    c:3
}
let{a,b} =obj
console.log(a,b)


function sum(a,b,c){
    return a+b+c;

}

let arr =[1,7,11]

console.log(arr[0]+arr[1]+arr[2]); // adding each index of arrary
console.log(sum(arr[0],arr[1],arr[2])); // using the function
console.log(sum(...arr)); // using spread operatior and then use sum a better way 

const obj2 ={...arr} // this add index of 0 ,1 ... to the arr and form the object 
console.log(obj2)


var a1=6; // this is the concept of hoisting it will declare the var a1 at the top of the block but the value doesnot get transferred 
let a2=7; // this will result to the error as let and const doesnot support hoisting 