const n=document.getElementById("userinput");
let result=document.getElementById("answer");
// n=5
let ans;
function factorial(){
    arr=[];
    // for (let index = 0; index < n; index++) {
    //     const element += arr[index];
    //     console.log(element);
        
    // }
    for(i=1;i<=n.value;i++)
    {
        arr.push(i);
    }
    console.log(n.value)
    console.log(arr)
    let red = (a,b)=>{
        return a*b
    }
    
    ans=arr.reduce(red);
console.log(ans)
result.value=ans;

}

