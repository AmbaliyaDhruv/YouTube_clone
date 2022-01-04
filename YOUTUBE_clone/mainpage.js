async function searchOn() {
    try {
        let Name = document.querySelector("#Name").value;

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${Name}&type=video&key=AIzaSyCuEDBoSuTkpY7oMrya-3eV3PJReia8vMo&maxResults=40`)

        let data = await res.json();
        console.log(data.items)
        display(data.items);
    }
    catch (error) {
        console.log(error);
    }
}

let box = document.querySelector("#display");
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