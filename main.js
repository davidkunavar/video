const btn = document.querySelector(".swithc__btn");
const video = document.querySelector(".video-container");


btn.addEventListener("click", function () {
    let upravljalni = btn.classList;
    upravljalni.toggle("slide");
    if(upravljalni.contains("slide")){
        video.play();
    }
    else {
        video.pause();
    }
})