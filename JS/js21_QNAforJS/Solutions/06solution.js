// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


let str="samir tamang asfasdf is hello his"
vowel =["a" ,"e" ,"i" , "o" ,"u" ]
const chars=[...str];
// for (let index = 0; index < chars.length; index++) {
//     const element = chars[index];
//     console.log(element);
    let c=0;
    
// }
for (const element of chars) {
    // console.log(element);
    for (const i of vowel) {
        if(element==i){
            c=c+1;
        
    }
    }
    
}
console.log(c);