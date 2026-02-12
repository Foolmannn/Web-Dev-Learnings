let arr =[ 1, 2, 3, 4, 5]

console.log(arr)
console.log(typeof(arr)) // type of arrays is object 
console.log(arr.length)

// Arrays are mutable but strings are immutable 

// Accessing array elements using the index in js 


console.log(arr[3]);

console.log (arr.indexOf(5))

// replacing the Element in arrays 

arr[3]=188;

console.log(arr)

// Methods of Array

console.log(arr.toString())

console.log(arr.join(" and "))

arr.pop() //removes the last element

console.log(arr.pop()) // returns the popped element
console.log(arr)

arr.push(25) // adds the element at the end 
console.log(arr)

arr.push("Suman")
console.log(arr.push("harry")) // returns the new updated length
console.log(arr)


arr.shift() //removes from the first 
console.log(arr.shift()) // returns the removed element
console.log(arr)


arr.unshift("harry")// adds at the beginning 
console.log(arr.unshift(0)) // returns the new updated length
console.log(arr)

// Deletes the element but the memory allocated is reserved so the length do no change and empty space is preserved 
delete arr[5];
console.log(arr.length)
console.log(arr)


arr1=[1 ,2 ,5]
arr2=[5, 8, 7]
arr3=[9,9,0 ]
console.log(arr1.concat(arr2))
console.log(arr1) // concat donot modifies the original arrays 


arrcombined = arr1.concat(arr2,arr3)
arrcombined.sort() //sort modifies the original array 

console.log(arrcombined)


let numbers=[1,2,3,4,5,6,7,8]
numbers.splice(1,5) // removes element from the index 1 and 5 elements 1 means starting index, 5 means no of elements to splice 
console.log(numbers)

numbers1=[1,2,3,4,5,6,7,8,9]
numbers1.splice(1,3,123, 2342) // after splicing new element can be added at the same position as shown 
console.log(numbers1)


//slice method
numbers2=[4,5,6 ,7,8]

console.log(numbers2.slice(1,4))// slice method doesnot modifies the original arrays 
console.log(numbers2)




