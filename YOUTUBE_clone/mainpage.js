let arr1;
let box = document.querySelector("#display");
async function searchOn() {
    try {
        let Name = document.querySelector("#Name").value;

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${Name}&type=video&key=AIzaSyCuEDBoSuTkpY7oMrya-3eV3PJReia8vMo&maxResults=40`)

        let data = await res.json();
       
        console.log(data.items)
        arr1=data.items;
        
      localStorage.setItem("all",JSON.stringify(arr1));
      display(arr1);
    }
    catch (error) {
        console.log(error);
    }
}

let dhruv=JSON.parse(localStorage.getItem("all"));

  display(dhruv);

function display(data) {
    box.innerHTML = null
    data.forEach((ele) => {

        let outer = document.createElement("div");
        outer.className = "outer";
        outer.addEventListener("click", () => {
            fullVideo(ele);
        })

        let img = document.createElement("img");
        img.src = ele.snippet.thumbnails.medium.url;
        img.className="imgposter"
  
        let des = document.createElement("div");
        des.className="des"
        let tital = document.createElement("h3");
        tital.innerText = ele.snippet.title;
        let channel = document.createElement("h4");
        channel.innerText = ele.snippet.channelTitle;
        let more=document.createElement("h5");
        more.innerText=ele.snippet.description;

        box.append(outer);
        outer.append(img, des);
        des.append(channel, tital,more);

    })
}

let arr = [];
function fullVideo(ele) {
    console.log(ele);
    arr.push(ele);
    localStorage.setItem("VideoData", JSON.stringify(arr));
    window.location.href = "subpage.html";
}

let status=true;
document.querySelector(".night").innerText="🌚"
//"☀️""🌚"
function changeOn(){
    if(status===true){
        document.querySelector(".night").innerText="🌚"
        let body=document.querySelector("body");
        body.style.background="white";
        body.style.color="black"
        status=false;
    }
    else{
        status=true;
        document.querySelector(".night").innerText="☀️"
        let body=document.querySelector("body");
        body.style.background="black";
        body.style.color="white";
       
   
        
    }
}


