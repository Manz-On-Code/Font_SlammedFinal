leftwristx = 0
rightwristx = 0
difference = 0
function setup () {
    canvas = createCanvas(400,400)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(400,400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background("#FFE7CC");
    textSize(difference)
    fill("blue")
    text("Maanas", 200, 200)
}
    function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        leftwristx = results[0].pose.leftWrist.x
        rightwristx = results[0].pose.rightWrist.x
        difference = floor(leftwristx - rightwristx)
    }
    
}
function modelLoaded(){
    console.log("Code is working cuh")
}
