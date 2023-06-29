console.log("Welcome to spotify");
let songIndex=0;
let audioElement=new Audio('5.mp3');
let masterPlay=document.getElementById('masterPlay');
let gif=document.getElementById('gif');
let myProgressBar=document.getElementById('MyprogressBar');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Let me love you ",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName:"Let me love you ",filePath:"2.mp3",coverPath:"2.jpg"},
    {songName:"Let me love you ",filePath:"3.mp3",coverPath:"3.jpg"},
    {songName:"Let me love you ",filePath:"4.mp3",coverPath:"4.jpg"},
    {songName:"Let me love you ",filePath:"5.mp3",coverPath:"5.jpg"},
    {songName:"Let me love you ",filePath:"6.mp3",coverPath:"6.jpg"},
    {songName:"Let me love you ",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName:"Let me love you ",filePath:"8.mp3",coverPath:"10.jpg"},
    

    

]

songItems.forEach((element,i) =>{
  console.log(element,i);
  element.getElementsByTagName('img')[0].src=songs[i].coverPath;
  element.getElementsByClassName('Songname')[0].innerText=songs[i].songName;
  
})
//audioElement.play 
//handle play /pause click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused||audioElement.currentTime<=0){
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
//listen events
audioElement.addEventListener('timeupdate',()=>{
   // console.log("timeupdate");
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
}) 


const makeALLPLAYS=() =>{
  Array.from(doucument.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-play-circle');
    element.classList.add('fa-pause-circle');
    })
}

Array.from(doucument.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeALLPLAYS();
    index=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src='${songIndex}.mp3';
 masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
       gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=9){
    songIndex=0;
  }else{
    songIndex +=1;
  }
  audioElement.src='${songIndex}.mp3';
      masterSongName.innerText=song[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=0;
  }else{
    songIndex -=1;
  }
  audioElement.src='${songIndex}.mp3';
  masterSongName.innerText=song[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})
