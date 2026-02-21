// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1,2,3,4,4,5,6,6,7,6,8,9];
let arrSolution=[];
x=0;
function arrDoubler(a){
    for (const e of arr) {
        if(x==e){
            arrSolution.push(e);
        }
        else{

            arrSolution.push(e*2);
        }
        x=e;
    }
}
arrDoubler(arr)
console.log(arrSolution)