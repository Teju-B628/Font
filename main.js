nosex= 0;
nosey= 0;
leftwx=0;
rightwx=0;
difference=0;
function setup(){
canvas = createCanvas(300,415);
canvas.position(350,186);
webcam = createCapture(VIDEO);
webcam.size(550,700);
webcam.position(650,50);
posenet = ml5.poseNet(webcam,modelLoaded);
posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('console is working');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
leftwx=results[0].pose.leftWrist.x;
rightwx=results[0].pose.rightWrist.x;
difference=floor(leftwx-rightwx);
}
}

function draw(){
    document.getElementById("label").innerHTML="Size Of The Text: " + difference; 
    fill("black");
    stroke("white");
    textSize(difference);
    text("HALLOOOO",nosex,nosey);
}
