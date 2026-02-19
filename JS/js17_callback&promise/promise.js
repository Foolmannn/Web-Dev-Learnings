console.log('THis is Promises');


// Promises means promise of the code execution

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


