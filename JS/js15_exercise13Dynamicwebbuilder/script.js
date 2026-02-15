let titleName = document.querySelector(".title");
let ChannelName =document.querySelector(".channelname");
let viewsCount =document.querySelector(".viewsCount");
let releaseDate =document.querySelector(".releasedate");
let Duration =document.querySelector(".duration");
let thumbimage =document.querySelector(".thumbimage");

let container =document.querySelector(".container");
let card=document.createElement("div")

card.innerHTML=`


       <div class="cards">
            <div class="thumbnail">
                <img class="thumbimage" ="" alt="">
                <div class="duration">31:20</div>
            </div>
            <div class="left">
                <div class="title">
    
                Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1
    
                </div>
                <div class="extrainfo">

                    <p class="channelname"> Channel Name </p>
                    <pre> . </pre>
                    <p class="viewsCount"> 000 </p>
                    <pre>K views . </pre>
                    <p class="releasedate">2</p>
                    <pre> Months ago .</pre>

                </div>
            </div>
        </div>
  `


function createCard(title="Hello",cName="Channel Name" ,views=304 ,daysOld=0,duration="01:00",thumbimageurl){
    titleName.innerHTML =title;
    ChannelName.innerHTML =cName;
    viewsCount.innerHTML =views;
    releaseDate.innerHTML =Math.ceil(daysOld/30);
    Duration.innerHTML =duration;
    thumbimage.src=thumbimageurl
    // container.after(card)

}

createCard("Introduction to Sigma Web development","CodeWithHarry",56000,700,"31:32","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBenW1M30gqWfrb8bLNydwUJiebEA")
