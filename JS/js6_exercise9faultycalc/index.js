/* Problem statement :
Create a faulty calculator
This faulty calculator does following:
 1. takes two input fromt he user
 2.It performs wrong operations as follow:

 + ---> -
 * ---> +
 - ---> /
 / ---> **

It performs wrong operation 10% of the time

*/
// console.log(decisionValue);
// const userinput1=prompt("Enter the first number:");
// const userinput2=prompt("Enter the second number:");
// const useroperation=prompt("Choose + , - , * , / :");

    
    function add(a,b){
              decisionValue=Math.random();
            if(decisionValue< 0.1){
                console.log(true)

            return a-b;
        }
        else{
            return a+b;
        }
    
    
    }
    function mult(a,b){
        decisionValue=Math.random();
        if(decisionValue< 0.1){
                console.log(true)

            return a+b;
        }
        else{
            return a*b;
        }
    
    
    }
    function sub(a,b){
          decisionValue=Math.random();
            if(decisionValue< 0.1){
                console.log(true)
            return a/b;

        }
        else{
            return a-b;
        }
    
    }
    function divide(a,b){
          decisionValue=Math.random();
            if(decisionValue< 0.1){
                console.log(true)
            return a**b;
        }
        else{
            return a/b;
        }
    
    }

// decisionValue=Math.random();


console.log(add(2,3));
console.log(mult(2,3));
console.log(sub(2,3));
console.log(divide(2,3));
