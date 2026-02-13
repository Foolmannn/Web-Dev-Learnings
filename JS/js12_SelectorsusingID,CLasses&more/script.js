console.log("selectors ")
 //using the dom 
// let name = document.body.children[1] 
// USing the Selectors 

// selecting using the classname 
let names = document.getElementsByClassName("box")
console.log(names)


names[2].style.backgroundColor="red"

//ID selector

document.getElementById("fifthbox").style.backgroundColor="green"

// using the queryselector 
console.log(document.querySelector(".box1"))//this gives the first matching with selector 
document.querySelector(".box1").style.backgroundColor ="yellow"; // this works for the first selector matched 

console.log(document.querySelectorAll(".box1")) // this gives the html collections 

// document.querySelectorAll(".box").style.backgroundColor ="yellow";
// This doesnot work because queryselectorall returns the multiple elements as the node list so loop is needed as below

document.querySelectorAll(".box1").forEach(e=>{
    e.style.backgroundColor ="pink";
})


// tagname

console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByTagName("p"))
// document.getElementsByTagName("p").forEach(elements=>{

//     elements.style.backgroundColor ="red";
// }) 

//??This doesnot work because unlike the queryselectorall it doesnot returns the node lists but returns the html collections which do not support the foreach() loop so we need to convert it to array or use the normal for loop 

// thus the queryselector all is always preferred 

Array.from(document.getElementsByTagName("p")).forEach(element => {
    element.style.backgroundColor = "red";
});


let elements = document.getElementsByTagName("span");

for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "aqua";
}


//matches method check whether the selector matches the elements 
let boxes = document.getElementsByTagName("div")

console.log(boxes[11].matches("#fifthbox")) // returns true 

console.log(boxes[10].closest("#fifthbox")) //returns null  
//it tries to find  the closest ie the parent then its parent until ends if not found returns the null 

//contains return true if element b is inside the element a

console.log(document.querySelector(".container").contains(boxes[6])) //returns true
console.log(document.querySelector(".container").contains(document.querySelector("body"))) //return false
console.log(document.querySelector("body").contains(document.querySelector("body"))) //returns true
console.log(document.querySelector("body").contains(document.querySelector(".container"))) //returns true


