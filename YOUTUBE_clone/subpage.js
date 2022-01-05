let iframe = document.querySelector("#iframe");
let des=document.querySelector(".des");
let newArr = JSON.parse(localStorage.getItem("VideoData"));

console.log(newArr);
newArr.map((ele) => {
   
    let box = document.createElement("iframe");
    box.className = "iframebox"
    box.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    box.setAttribute("allowfullscreen",true)
    
    let id=ele.id.videoId
    box.src = `https://www.youtube.com/embed/${id}`
    iframe.append(box);
    
     
        let tital = document.createElement("h1");
        tital.innerText = ele.snippet.title;
        let channel = document.createElement("h3");
        channel.innerText = ele.snippet.channelTitle;
        let more=document.createElement("h4");
        more.innerText=ele.snippet.description;

    des.append(channel,tital,more);
    
})


function back(){
    window.location.href="index.html"
}