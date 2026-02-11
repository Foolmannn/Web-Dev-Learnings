console.log("Learning loops");


// Loops in the JS 





console.log("\n");
// Basic for loop 
let a=1;
for(let i=0;i <10; i++){
    a+=i;
    console.log(a);
}
  
console.log("\n");
// for in loop 

let obj ={
    name:"suman",
    age:20,
    role:"student"
};
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(key,element)
    
    
}


console.log("\n");
// for of loop 

for (const c of "Suman") {
    console.log(c);
}

console.log("\n");
// while looop 


{
     let i=0;
while (i<9){
 console.log(i);
 i++;
}
}

console.log("\n");
let z=8;
// do while loop 
do {
    console.log(z);
    z--;
} while (z>10);

