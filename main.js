sound = "";
function preload(){
    sound = loadSound("music.mp3");

}

function setup() {
 canvas = createCanvas(600,500);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
posenet=ml5.poseNet(video,modelloaded);
//poseNet.on('pose',gotPoses);
}

function modelloaded(){
console.log('pose net initialized');


}

function draw(){
    image(video ,0,0,600,500);

}

function play() {
 sound.play();
}