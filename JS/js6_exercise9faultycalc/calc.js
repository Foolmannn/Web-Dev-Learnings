let random=Math.random();

let a=prompt("Enter the first number:")
let c=prompt("Enter the operation:")
let b=prompt("Enter the second number:")

let obj ={
    "+" : "-",
    "-" : "+",
    "*" : "/",
    "/" : "**"
}

// using eval function of JS for calculation 
//Eval is not widely used due to security concerns in the production website


if(random > 0.1){
    // Performing right operation
    // alert("The result is ${eval(`${a} ${c} ${b}`)}");
}
else{
    // Performing wrong operation 
    //changing the operation sign usng objects
    c =obj[c];

    // alert("1The result is ${eval(`${a} ${c} ${b}`)}");
}
    let result= eval(`${a} ${c} ${b}`);

alert(`The result is ${result}`);