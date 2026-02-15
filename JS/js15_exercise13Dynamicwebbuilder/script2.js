function createCard(title, cName, views, daysold, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let monthsOld;
    if(daysold<30){
        monthsOld=daysold + " days";
    }
    else if(daysold>30 && daysold<365){

        monthsOld =Math.ceil(daysold/30) + " months";
    }
    else{
        monthsOld=Math.ceil(daysold/365) + " years";
    }
//     let html = `<div class="card">
//     <div class="image">
//         <img src="${thumbnail}"
//             alt="">
//         <div class="capsule">${duration}</div>
//     </div>
//     <div class="text">
//         <h1>${title}</h1>
//         <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
//     </div> 
// </div>`
let html= `
            <div class="cards">
                <div class="thumbnail">
                    <img class="thumbimage" src="${thumbnail}" alt="">
                    <div class="duration">${duration}</div>
                </div>
                <div class="left">
                    <div class="title">
    
                    ${title}
                    </div>
                     <div class="extrainfo">

                    <p class="channelname"> ${cName} </p>
                    <pre> . </pre>
                    <p class="viewsCount"> ${viewStr}  </p>
                    <pre> views . </pre>
                    <pre class="releasedate"> ${monthsOld}</pre>
                    <pre> ago .</pre>

                    </div>
                </div>
         </div>
  `

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}




createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 768, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 56000000, 79, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")



