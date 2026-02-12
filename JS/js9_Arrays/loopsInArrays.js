let a=[1,56,98,7,5,3]

console.log("USing FOr loop")

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(a[index]);
    
}
console.log("USing FOrEach")
a.forEach((value, index, arr)=>{
    console.log(value, index , arr);
})



console.log("USing For Of")
//For of is used for the arrarys 

for (const element of a) {
    console.log(element)
    

}


let obj={
    a:1,
    b:2,
    c:3
}
// for in is used for the objects 
console.log("USing For in")
//for in obj loop is used when the obj original properties are only needed omitting the added properties 

for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(element)
    console.log(key)
    
    
}




// Creating new array from the existing arrary 

let arr=[23,25,76,87,56,45,23]

let newarr =[];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    
    newarr.push(element+2);
    
}
console.log(newarr)

// above method works but better solution exits 
console.log("Using the map method ")
let newarr1 =arr.map ((e)=>{
    return e+2;
})
console.log(newarr1)

console.log("Using the filter method ")

let greaterthanfifty = (e)=>{
    if(e>50){
        return true
    }
    else{
        return false
    }
}

console.log(newarr.filter(greaterthanfifty))

console.log("Using the reduce method ")


let arr2=[1,2,3,4,5,6,7]

const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))


console.log("Using the Array.from method ")
//create an arrary from the strings or other objects 

let arr3= Array.from("sasdflaskdfjalskdfj")
console.log(arr3)
