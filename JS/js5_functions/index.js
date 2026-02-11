//Functions in js 
// It adds reusability and modularity in programs 
function add(a,b){
    return a+b;
}
sum= add(5,6);

console.log(sum);

console.log(add(9,9));

console.log("\n");

function greet(name)
{
    console.log("Hey hello, "+ name + "How are you ?")
    console.log("Welcome ! " +name );
}
greet("Suman");
// passing default parameter 

function multiply(x,y,z=2)
{
    console.log(x,y,z);
    return(x*y*z);
}
result1= multiply(2); // returns not a number(NAN) as b value is undefined 
result2= multiply(2,3,5);
result3= multiply(2,3); //takes the default value of z as 2
console.log(result1);
console.log(result2);
console.log(result3);

// Arrow function 
// they are used to store the function as a variable in js 
const func1 = (x)=>{
    console.log("Using arrows function to print " , x)
}
func1(23);
func1(63);
func1(53);
func1(43);



