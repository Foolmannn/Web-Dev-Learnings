
// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

arr = [1,2,3,-4,5,6,-9]
arr2 =[3,4,-6,-7,8]
function sum(a){
    let s=0;
    for (const key in a) {
        if (!Object.hasOwn(a, key)) continue;
        
        const element = a[key];
        if(element>0){
            s+=element;
        }
        else{
            s+=0;
        }
        
        
    }
    return s;
}
console.log(sum(arr))
console.log(sum(arr2))