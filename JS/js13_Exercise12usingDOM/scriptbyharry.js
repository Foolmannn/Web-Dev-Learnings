// boxes = document.getElementsByClassName(".box")
// console.log(boxes)

boxes = document.querySelectorAll(".box");
console.log(boxes)

function getRandomColor()
{
    //getting random number using the formula 
    // a + r (b-a)
    // where a is min number r is random number and b is max number so for the number between 0 to 255 below formula is used and math.ceil gives the integer value just greater than the genrated number 
    let val1=  Math.ceil(0 + Math.random()*255);
   let val2= Math.ceil(0 + Math.random()*255);
    let val3= Math.ceil(0 + Math.random()*255);
    console.log(val1,val2,val3)
    return `rgb(${val1} ${val2} ${val3})`

}
function getRandombgcolor()
{
let val1=  Math.ceil(0 + Math.random()*255);
   let val2= Math.ceil(0 + Math.random()*255);
    let val3= Math.ceil(0 + Math.random()*255);
    console.log(val1,val2,val3)
    return `rgb(${val1} ${val2} ${val3})`
}
boxes.forEach(element => {
    console.log(element)
   element.style.backgroundColor = getRandombgcolor()
   element.style.color = getRandomColor()

});