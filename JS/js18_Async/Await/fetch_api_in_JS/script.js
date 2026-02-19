// function getData(){
//     // simulate geeting data from server 
//  return new Promise((resolve , reject )=>{
//     setTimeout(() => {
//         resolve(455)
//     },3000);
//  })
async function getData(){
    // simulate geeting data from server 
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') // fetching the data from the API 
    let data = await x.json()
    console.log(data)
  console.log(x);
  return data



}
/*

{

    console.log("Loading modules ")
    
    console.log('Do something else ');
    
    console.log('Load data');
    let data = getData()
    
    data.then((v)=>{
    
        console.log(data)
        
        console.log('Process data');
    
    
    })

}
*/

// above code shows the using promise to await the data before using the data 


// instead of using the .then in promise we can use the better way using the  await in async function 
async function main(){
        console.log("Loading modules ")
    
    console.log('Do something else ');
    
    console.log('Load data');


    let data = await getData() // waits for the getdata to get settled 
    // settled means either resolved or rejected 
    // if resolved means settled successfully 
    //  if rejected means settle unsuccessfully 
    

    
        console.log(data)
        
        console.log('Process data');
        console.log('Task 2');
        

}
main()