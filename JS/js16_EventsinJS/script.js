let btn =document.getElementById("btn");

btn.addEventListener("click",()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML="I am changed using the event listener";
})
btn.addEventListener("dblclick",()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML="I am changed using the event listener of doubleclick";
})
btn.addEventListener("contextmenu",()=>{
    alert("contextmenu works on right click")
  
})
document.addEventListener("keydown",(e)=>{
    console.log(e)
    console.log(e.key)
  
})
