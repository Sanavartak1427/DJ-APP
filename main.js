function setup() {
    canvas = createCanvas(600,400);
    canvas.position(400,200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}

function modelLoaded(){
    console.log('PoseNet is Intialized');
}

function draw(){
    image(video,0,0,600,500);
    fill('#e31814');
    stroke('#e31814');
if(scoreLeftWrist > 0.2 ){
circle(leftWristX, leftWristY, 20);
InNumber = Number(leftWristY);
remove_decimals = floor(InNumber);
volume = remove_decimals/500;
song.setVloume(volume);
document.getElementById("volume").innerHTML = "Volume = " + volume;


}

}

song = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
scoreLeftWrist = 0;


function preload()
{
  song = loadSound("music.mp3");
}

function play_music()
{
    song.play();
    song.setVloume(1);
    song.rate(1);
}

function gotposes(result){
    if (result.length > 0){
        console.log(result);
    leftWristX = result[0].pose.leftWrist.x;
    rightWristX = result[0].pose.rightWrist.x;
    leftWristY = result[0].pose.leftWrist.y;
    rightWristY = result[0].pose.rightWrist.y;
    console.log("leftWristX" + leftWristX + "leftWristY" + leftWristY);
    console.log("rightWristX" + rightWristX + "rightWristY" + rightWristY);
    scoreLeftWrist = result[0].pose.keypoints[9].score;
    }
}