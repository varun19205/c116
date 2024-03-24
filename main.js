nose_X_coordinates = 0;
nose_Y_coordinates = 0;


function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.size(400, 400);
    webcam.hide()
    model_posenet = ml5.poseNet(webcam, modelloaded);
    model_posenet.on("pose", myPoses);
}




function modelloaded() {
    console.log("poseNet model is Intalised!!");
}

function myPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_X_coordinates = results[0].pose.nose.x;
        nose_Y_coordinates = results[0].pose.nose.y;
        console.log("Nose X coordinates = " + nose_X_coordinates);
        console.log("Nose Y coordinates = " + nose_Y_coordinates);
    }
}

function preload() {
    mustache_filter = loadImage("mustache.png");
}

function draw() {
    image(webcam, 0, 0, 400, 400);
    image(mustache_filter , nose_X_coordinates-70 , nose_Y_coordinates-8 , 150 , 90);
}

function Snap() {
    save("selfie.jpg");
}