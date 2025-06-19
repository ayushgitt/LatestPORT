const video1=document.getElementById("projectvideo1");
const video2=document.getElementById('projectvideo2');
const video3=document.getElementById('projectvideo3');

const sidebar= document.querySelector('.sidebar');
const menu= document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');


const videos=[video1,video2,video3];

videos.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();
    })
    video.addEventListener('mouseout',function(){
        video.pause();
        video.currentTime=0;
    })
})


// Toggle sidebar on menu icon click
menu.addEventListener("click", function() {
    sidebar.classList.toggle("open-sidebar");
    console.log("1")
    console.log(sidebar)
})

// // Close sidebar on close icon click
// closeIcon.addEventListener("click", function() {
//     sidebar.classList.remove("open-sidebar");
//     console.log("2")
// })

