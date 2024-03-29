console.log("Welcome to Spotify");
//iniatialize the variables
let songIndex=0;
let audioelement = new Audio('4.mp3.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar =document.getElementById('myprogressbar');
let gif =document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songname: "tum hi ho",filePath:"song/4.mp3"},
    {songname: "ohh zalima",filePath:"zalima.mp3"},
    {songname: "o piya re piya",filePath:"audip2.mp3"},
    {songname: "main hu sath tere",filePath:"audip3.mp3"},
]
// songitem.forEach((element,i)=>{
//     element.getElementsByTagName("img")[0].src = songs[i].filePath;
// });
// let audioelement = new Audio('1.mp3');
//handel play/pause
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
})
//listen to events
myprogressbar.addEventListener('timeupdate', ()=> {
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', ()=> {
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
})
// const makeallplace = ()=>{
//     Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })

// }
// Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
//     element.addEventListener('click',(e)=>{
//         console.log(e.target);
//         makeallplace();
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-play-circle');
//         audioelement.src= 'zalima.mp3';
//         audioelement.currentTime =0;
//         audioelement.play();
//     })
    
// });