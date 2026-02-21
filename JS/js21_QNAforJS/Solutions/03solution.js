// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// let str ="Hello hi are you "

// function stringmirror(s){
//     let splitstr =str.
//     console.log(splitstr);
    
// }
let str2="";
const str = "Hello";
const chars= [...str];

for (let index = chars.length -1  ; index >=0 ; index--) {
    const element = chars[index];
    // console.log(element)
 str2 +=element;

    // str2.concat(element);
    
}
// for (const char of str) {
//     // console.log(char); // Logs each character
//     str2 =str+char

// }   
console.log(str+ str2);

// stringmirror()