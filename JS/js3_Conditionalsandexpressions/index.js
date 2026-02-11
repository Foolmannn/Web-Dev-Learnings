console.log("Learning the conditional and expressions in JS")
let age=45;
let grace=2;
console.log(age+grace);
console.log(age-grace);
console.log(age/grace);
console.log(age*grace);
console.log(age**grace);//expoentiation
console.log(age%grace);

age+=grace;
console.log("age");

if(age>=18){
    console.log("You can vote");

}
else{
    console.log("YOu cannot drive");
}

// = assignment operator
// == equal in value only
// === equal in value and type both 
// != not equal 
// ? ternary operator 
// && logical and 
// || logical or 


// ternary operator 

a=7;
b=9;
c=a>b ? (a-b):(b-a);
console.log(c);