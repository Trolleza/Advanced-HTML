let music = document.getElementById("hurt");
let progressBar = document.querySelector("#rangeProgress");
let btnPlay = document.querySelector("#main-btn")
let btnMute = document.getElementById("muteUnmute");

addEventListener("load", iniciate)

function iniciate(){
    music.duration;}

function rewind(){
    music.playbackRate -= 0.2;}

function forward(){
    music.playbackRate += 0.2;}

function stop(){
    btnPlay.src="./Images/Play.png"
    music.pause();
    music.currentTime = 0;
    music.playbackRate = 1;}

//Play & Pause
document.querySelector("#main-btn").addEventListener("click", () => {
    if (music.paused){
        music.play();
        btnPlay.src = "./Images/Pause.png";}
    else{
        music.pause();
        btnPlay.src = "./Images/Play.png";}});

//Mute
btnMute.addEventListener("click", function(event){
    if(music.muted){
        music.muted = false
        btnMute.src = "./Images/Mute.png";}
    else{
        music.muted = true;
        btnMute.src = "./Images/Unmute.png"}}, false);

//Volume+ & Volume-
function volume1(){
    music.volume += 0.1;
    console.log(music.volume)
    if(music.volume == 1 ){
        alert("Maximum Volume")}
    else if (music.volume > 1){
        alert("Already at the maximum, it is not possible to increase!")}};

function volume2(){
    music.volume -= 0.1;
    console.log(music.volume)
    if (music.volume == 0.20000000000000015){
        alert ("Minimum Volume")}
    else if (music.volume < 0.1999999999){
        alert("Can't get any lower")
        music.volume = 0.20000000000000015; 
        console.log(music.volume)}};

//Barra de Progresso & Time
function progress(){
    progressBar.setAttribute("max", music.duration);
    progressBar.setAttribute("value", music.currentTime);

    let time = music.currentTime;

    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time - (hours * 3600)) / 60);
    let seconds = Math.floor(time % 60);

    if (hours < 10){hours = "0" + hours}
    if (minutes < 10){minutes = "0" + minutes}
    if (seconds < 10){seconds = "0" + seconds}

    document.querySelector("#time").innerHTML = hours + ":" + minutes + ":" + seconds};

setInterval(progress, 1000);

progressBar.addEventListener("input", () => {});

progressBar.addEventListener("mousedown", () => {
    music.pause();
    progressBar.addEventListener("input", (e) => {
        music.currentTime = e.target.value})});

progressBar.addEventListener("mouseup", () => {
    music.play();

    function retake(){
        let value = progressBar.getAttribute("value");
        progressBar.value = value;}

    setInterval(retake, 1000)});

    