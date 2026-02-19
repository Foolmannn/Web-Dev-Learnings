console.log('THis is Promises');


// Promises means promise of the code execution

/* 
✅ What is a Promise?

A Promise is an object that represents:

✅ Success (resolved)

❌ Failure (rejected)

⏳ Pending (waiting)

It helps avoid callback hell. */

let prom1 = new Promise((resolve, reject) =>{
    let a= Math.random();
    if(a<0.5){
        reject("random number rejecte you");
    }
    else{

        setTimeout(()=>{
            console.log('Yes i an done');
            resolve("Suman")
            
        },3000);


    }
})

let prom2 = new Promise((resolve, reject) =>{
    let a= Math.random();
    if(a<0.5){
        reject("random number rejects you 2");
    }
    else{

        setTimeout(()=>{
            console.log('Yes i am done 2');
            resolve("Suman 2")
            
        },1000);


    }
})
let prom3 = new Promise((resolve, reject) =>{
    let a= Math.random();
    if(a<0.5){
        reject("random number rejects you 3");
    }
    else{

        setTimeout(()=>{
            console.log('Yes i am done 3');
            resolve("Suman 3")
            
        },1000);


    }
})
let prom4 = new Promise((resolve, reject) =>{
    let a= Math.random();
    if(a<0.5){
        reject("random number rejects you 4");
    }
    else{

        setTimeout(()=>{
            console.log('Yes i am done 4');
            resolve("Suman 4")
            
        },1000);


    }
})
let prom5 = new Promise((resolve, reject) =>{
    let a= Math.random();
    if(a<0.5){
        reject("random number rejects you 5");
    }
    else{

        setTimeout(()=>{
            console.log('Yes i am done 5');
            resolve("Suman 5")
            
        },1000);


    }
})

// prom1.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
    
// })

// promise chaining can be done 

// when all promise are fulfilled 

let p3 = Promise.all([prom1 , prom2])
p3.then((a)=>{
        console.log(a)
}).catch(err=>{
        console.log(err);
})

// all settled gives the status and value ( i.e fullflled or rejected )
let p4 = Promise.allSettled([prom2 , prom3])
p4.then((a)=>{
        console.log(a)
}).catch(err=>{
        console.log(err);
})

// races two promises whick one first resolves or rejects  gives the value or error

let p5 = Promise.race([prom3 , prom4])
p5.then((a)=>{
        console.log(a)
}).catch(err=>{
        console.log(err);
})

// any waits for frist fullfillment then gives th value of resolved one if all get rejected give arregate Error 

let p6 = Promise.any([prom4 , prom5])
p6.then((a)=>{
        console.log(a)
}).catch(err=>{
        console.log(err);
})


/*
🔎 Promise States
State	Meaning
Pending	Waiting for result
Resolved	Success
Rejected	Failed
🔹 Promise Version of Callback Hell Example

Instead of:

loginUser(function(user){
    getProfile(user, function(profile){
        getPosts(profile, function(posts){
            console.log(posts);
        });
    });
});


We write:

loginUser()
    .then(user => getProfile(user))
    .then(profile => getPosts(profile))
    .then(posts => console.log(posts))
    .catch(error => console.log(error));


✨ Much cleaner!

🧠 Real Example (Like Your Project)

Imagine fetching products from server:

Callback Version
function fetchProducts(callback) {
    setTimeout(() => {
        callback(["Product1", "Product2"]);
    }, 1000);
}

fetchProducts(function(products){
    console.log(products);
});

Promise Version
function fetchProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Product1", "Product2"]);
        }, 1000);
    });
}

fetchProducts()
    .then(products => console.log(products))
    .catch(error => console.log(error));

⚡ Bonus: async/await (Modern Way)
async function getProducts() {
    try {
        let products = await fetchProducts();
        console.log(products);
    } catch(error) {
        console.log(error);
    }
}

getProducts();


👉 async/await is built on top of Promises and looks cleaner.

🎯 Simple Difference
Callback	Promise
Function passed as argument	Object representing future result
Can cause callback hell	Cleaner chaining
Harder to manage errors	Better error handling
Older approach	Modern approach
💡 When To Use?

Small simple async → callback is fine

Multiple async operations → use Promise

Modern projects → use async/await

If you want, I can now:

🔥 Explain with a real fetch() API example

🔥 Show how this works with your PHP backend

🔥 Give interview-style explanation

Tell me which one 😄



*/