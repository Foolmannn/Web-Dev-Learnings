console.log("Code is also running");
console.log("This is the external js");


var a = prompt("Enter your number.");

console.log("Your number is :" + a)

var istrue = confirm("Are you sure you want to leave this page ?")

 if(istrue)
{
    console.log("You are leaving the page..")

}
else{
    console.log("Stayed on this page")
}
// styling can be done using the js it adds the inline css in the html document 
document.title="Hey this title is changed using js"

document.body.style.backgroundColor="green"

