boxes =document.body.firstElementChild.children
console.log(boxes)
console.log(boxes[1])

random =Math.random()
console.log(random)

function colorassigner(){
    if(random<0.2){
        boxes[0].style.color="red"
        boxes[1].style.color="green"
        boxes[2].style.color="violet"
        boxes[3].style.color="yellow"
        boxes[4].style.color="pink"



    }
    else if(random>0.2 && random<0.4){
        boxes[4].style.color="red"
        boxes[0].style.color="green"
        boxes[1].style.color="violet"
        boxes[2].style.color="yellow"
        boxes[3].style.color="pink"
    }
    else if(random>0.2 && random<0.4){
        boxes[3].style.color="red"
        boxes[4].style.color="green"
        boxes[0].style.color="violet"
        boxes[1].style.color="yellow"
        boxes[2].style.color="pink"
    }
    else if(random>0.2 && random<0.4){
        boxes[2].style.color="red"
        boxes[3].style.color="green"
        boxes[4].style.color="violet"
        boxes[0].style.color="yellow"
        boxes[1].style.color="pink"
    }
    else {
        boxes[1].style.color="green"
        boxes[2].style.color="violet"
        boxes[3].style.color="yellow"
        boxes[4].style.color="pink"
        boxes[0].style.color="pink"
    }
}
random2 =Math.random()
console.log(random2)
function backgroundcolorassigner(){
    if(random2<0.2){
        boxes[0].style.backgroundColor="lightred"
        boxes[1].style.backgroundColor="lightcyan"
        boxes[2].style.backgroundColor="lightviolet"
        boxes[3].style.backgroundColor="lightyellow"
        boxes[4].style.backgroundColor="lightpink"
    }
    else if(random2>0.2 && random2<0.4){
        boxes[4].style.backgroundColor="lightred"
        boxes[0].style.backgroundColor="lightcyan"
        boxes[1].style.backgroundColor="lightviolet"
        boxes[2].style.backgroundColor="lightyellow"
        boxes[3].style.backgroundColor="lightpink"
        
    }
    else if(random2>0.2 && random2<0.4){
        boxes[3].style.backgroundColor="lightred"
        boxes[4].style.backgroundColor="lightcyan"
        boxes[0].style.backgroundColor="lightviolet"
        boxes[1].style.backgroundColor="lightyellow"
        boxes[2].style.backgroundColor="lightpink"

    }
    else if(random2>0.2 && random2<0.4) {
        boxes[2].style.backgroundColor="lightred"
        boxes[3].style.backgroundColor="lightcyan"
        boxes[4].style.backgroundColor="lightviolet"
        boxes[0].style.backgroundColor="lightyellow"
        boxes[1].style.backgroundColor="lightpink"

    }
    else {
        boxes[1].style.backgroundColor="lightred"
        boxes[2].style.backgroundColor="lightcyan"
        boxes[3].style.backgroundColor="lightviolet"
        boxes[4].style.backgroundColor="lightyellow"
        boxes[0].style.backgroundColor="lightpink"

    }
}

colorassigner();
backgroundcolorassigner();