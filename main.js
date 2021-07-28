song = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function preload(){
song = loadSound("Remix.mp3");
}

function setup(){
canvas = createCanvas( 440 , 440 );
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("My PoseNet Model Is Started");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY );


        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY );
    }
}

function draw(){
image( video , 0 , 0 , 440 , 440 );
}

function Play(){
song.play();
song.setVolume(1);
song.rate(1);
}

function stop(){
    song.stop();
}