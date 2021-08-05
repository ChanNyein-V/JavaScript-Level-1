// UI

const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title'),
    progresscontainer = document.getElementById('progress-container'),
    progress = document.getElementById('progress');

const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const prevbtn = document.getElementById('prev'),
    playbtn = document.getElementById('play'),
    nextbtn = document.getElementById('next');

let songindex = 0;

// Song Title
const songs = ['sample1','sample2','sample3'];

console.log(songs[songindex]);

loadsong(songs[songindex]);

function loadsong(music){
    // console.log('hay');

    title.innerText = music;
    audio.src = `music/${music}.mp3`;
    cover.src = `img/${music}.jpg`;
}

// Event Listener for play / pause
playbtn.addEventListener('click',()=>{
    // console.log('hay');

    const isplaying = musiccontainer.classList.contains('play');

    if (isplaying){
        pausesong();
    }else{
        playsong();
    }
});

// Play Song
function playsong(){
    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');
}

// Pause Song
function pausesong(){
    musiccontainer.classList.remove('play');

    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
}