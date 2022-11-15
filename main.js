img="";

function preload()
{
    img = loadImage("20221110_184059.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDectector('cocossd', modelLoaded);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    text("Headphones case", 45, 75);
    fill("FF0001")
    noFill();
    stroke("#FF0000")
    rect(30, 60, 450, 350);
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}