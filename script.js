console.log("Welcome To Spotify! -- Music For Everyone");
let Index=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songInfoName = document.getElementById('songInfoName');
let songitems = Array.from(document.getElementsByClassName('songItem'));

// let songs = [
//     {songname: "Jundullah",filepath:"songs/1.mp3" , coverpath:"covers/1.jpg"},
//     {songname: "Ya Adheeman",filepath:"songs/2.mp3" , coverpath:"covers/2.jpg"},
//     {songname: "Mustafa Mustafa",filepath:"songs/3.mp3" , coverpath:"covers/3.jpg"},
//     {songname: "Liyakun Yaumuka",filepath:"songs/4.mp3" , coverpath:"covers/4.jpg"},
//     {songname: "Sabeel-ud-dumu'e",filepath:"songs/5.mp3" , coverpath:"covers/5.jpg"},
//     {songname: "Jundullah",filepath:"songs/1.mp3" , coverpath:"covers/1.jpg"},
//     {songname: "Ya Adheeman",filepath:"songs/2.mp3" , coverpath:"covers/2.jpg"},
//     {songname: "Mustafa Mustafa",filepath:"songs/3.mp3" , coverpath:"covers/3.jpg"},
//     {songname: "Liyakun Yaumuka",filepath:"songs/4.mp3" , coverpath:"covers/4.jpg"},
//     {songname: "Sabeel-ud-dumu'e",filepath:"songs/5.mp3" , coverpath:"covers/5.jpg"},
// ]

let songs = [
    {songname: "Warriyo - Mortals [NCS Release]", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Cielo - Huma-Huma", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songname: "DEAF KEV - Invincible [NCS Release]-320k", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songname: "Different Heaven & EH!DE - My Heart [NCS Release]", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songname: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songname: "Rabba - Salam-e-Ishq", filepath: "songs/2.mp3", coverpath: "covers/1.jpg"},
    {songname: "Sakhiyaan - Salam-e-Ishq", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songname: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverpath: "covers/3.jpg"},
    {songname: "Tumhari Kasam - Salam-e-Ishq", filepath: "songs/2.mp3", coverpath: "covers/4.jpg"},
    {songname: "Na Jaana - Salam-e-Ishq", filepath: "songs/4.mp3", coverpath: "covers/5.jpg"},
]

songitems.forEach((element,i) => {
    // console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songname;  
})
// audioElement.play();
//handle play/pause: 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    }else{
        audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;

    }

})
audioElement.addEventListener('timeupdate', ()=>{
    //Update seekbar;
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');

    })
}
// const makeAllPause = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//       element.classList.remove('fa-play-circle');
//       element.classList.add('fa-pause-circle');

//     })
// }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e);
        makeAllPlays();
        Index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${Index}.mp3`;
        songInfoName.innerText = songs[Index-1].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    
   
})

document.getElementById('next').addEventListener('click', ()=>{
    if(Index>9)
    Index = 0;
    else
    Index+=1

    audioElement.src = `songs/${Index}.mp3`;
    songInfoName.innerText = songs[Index-1].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(Index<=0)
    Index = 9;
    else
    Index -= 1

    audioElement.src = `songs/${Index}.mp3`;
    songInfoName.innerText = songs[Index-1].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})