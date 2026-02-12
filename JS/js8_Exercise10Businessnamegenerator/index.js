/* Create a business name genrator by combining list of adjectives and shop name and another word 
Adjectives :
Crazy
Amazing
Fire 


Shop Name :
Engine 
Foods 
Garments 


Another word:
Bros 
Limited 
Hub 
*/


// Business Name Generator 

random1 = Math.random();
random2 = Math.random();
random3 = Math.random();


let adjectives={
    "1": "Crazy",
    "2": "Amazing",
    "3": "Fire"
}
let shopNames={
    "1": "Foods",
    "2": "Engine",
    "3": "Garments"
}
let anotherword={
    "1": "Bros",
    "2": "Limited",
    "3": "Hub"
}
// console.log(random1);
// console.log(random2);
// console.log(random3);
// console.log(adjectives[1]);
let selectedadjectives;
let selectedWord ;
let selectedShopName;

function BusinessNameGenerator(){
    if(random1<0.33){
        selectedadjectives = adjectives[1];
    }
    else if(random1>0.33 && random1<0.66){
        selectedadjectives=adjectives[2];
    }
    else{
        selectedadjectives=adjectives[3];
    }
    if(random2<0.33){
        selectedShopName = shopNames[1];
    }
    else if(random2>0.33 && random1<0.66){
        selectedShopName=shopNames[2];
    }
    else{
        selectedShopName=shopNames[3];
    }
    if(random3<0.33){
        selectedWord = anotherword[1];
    }
    else if(random3>0.33 && random1<0.66){
        selectedWord=anotherword[2];
    }
    else{
        selectedWord=anotherword[3];
    }
}






BusinessNameGenerator();
console.log(selectedadjectives + " " + selectedShopName +" " +selectedWord);
let fullName =selectedadjectives + " " + selectedShopName + " " + selectedWord;
let businessName = document.getElementById("answer");
businessName.value = fullName;