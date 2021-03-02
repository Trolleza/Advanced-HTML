let video = document.getElementById("video");

video.addEventListener("ended", stopVideo);

onload = () => {
    const playerMainButton = document.getElementById("main-btn");
    const playerFullscreenButton = document.getElementById("fullscreen");

    playerMainButton.addEventListener("click", play);
    playerMainButton.addEventListener("click", toggleToPause);

    playerFullscreenButton.addEventListener("click", fullscreen);};

function toggleToPause(){
    const element = document.getElementById("main-btn");

    element.setAttribute("src", "./Images/Pause.png");
    element.setAttribute("title", "Pausar");

    element.removeEventListener("click", play);
    element.removeEventListener("click", toggleToPause);

    element.addEventListener("click", pause);
    element.addEventListener("click", toggleToPlay);}

function toggleToPlay(){
    const element = document.getElementById("main-btn");
    
    element.setAttribute("src", "./Images/Play.png")
    element.setAttribute("title", "Reproduzir");
    
    element.removeEventListener("click", pause);
    element.removeEventListener("click", toggleToPlay);
    
    element.addEventListener("click", play);
    element.addEventListener("click", toggleToPause);}

function toggleToFullscreen(e){
    const element = e.target;
      
    element.setAttribute("src", "./Images/Fullscreen.png");
    element.setAttribute("title", "Maximizar");
      
    element.addEventListener("click", fullscreen);
    element.addEventListener("click", toggleToNormalScreen);}

function displayControllers(){
    const controllers = document.getElementsByClassName("controls-row")[0];
    controllers.style.display = "flex";}
      
function hideControllers(){
    const controllers = document.getElementsByClassName("controls-row")[0];
    controllers.style.display = "none";}
      

function play(){
    video.play();}

function pause(){
    video.pause();}

function stopVideo(){
    video.pause();
    toggleToPlay();
    video.currentTime=0;}

function speedDown(){
    video.playbackRate -= 0.1;}

function speedUp(){
    if (video.playbackRate >= 2){return;}
    video.playbackRate += 0.5;}

function fullscreen(){
    video.requestFullscreen();}

function normalScreen(){
    document.exitFullscreen();}

function forward(){
    video.currentTime += 15;}

function rewind(){
    video.currentTime -= 10;}







