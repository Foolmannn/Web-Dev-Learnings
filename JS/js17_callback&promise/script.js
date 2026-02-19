console.log("I am a hacker");
console.log("She is a hecker");


// A callback is a function that is passed as an argument to another function and is executed later.

// 👉 It is mainly used for asynchronous operations.


// 👉 setTimeout is asynchronous, so it doesn't block execution.
setTimeout(() => {
    console.log("I an inside the setTimeout 2 sec")
}, 2000);
setTimeout(() => {
    console.log("I an inside the setTimeout 0 sec")
}, 0);

console.log("the end")

// this demonstrate the asynchronos nature of JS

function callback(arg){
    console.log(arg);
}
const loadScript = (src, callback )=>{
    let sc= document.createElement("script");
    sc.src= src;
    sc.onload = callback("Suman");
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);


// cascading callback function is difficult to manage so promises are used 
// Solution to callback hell is promise 

// ❌ Problem with Callbacks: Callback Hell

// When multiple async operations depend on each other:

// loginUser(function(user){
//     getProfile(user, function(profile){
//         getPosts(profile, function(posts){
//             console.log(posts);
//         });
//     });
// });


// 😵 This nested structure is called Callback Hell.