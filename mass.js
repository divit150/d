status = "";
objects=[];

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();

    od = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting object";
}
function modelLoaded() {
    console.log("Model is loaded");
    status = true;
    od.detect(img, gotResult);
}
function gotResult(error,results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    if(status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        od.detect(video, gotResult);
        for(i = 0; i < objects.length ; i++){
            document.getElementById("status").innerHTML="Status : Object Detected";
            fill(r,g,b);
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label +" "+percent +"% " ,objects[i].x+15 , objects[i].y+15);
            noFill();
            
            stroke(r,g,b);
            rect(objects[i].x , objects[i].y, objects[i].width, objects[i].height);
        }
    }


    image(img, 0, 0, 500, 400);
    fill("#ff0000");
    text("golden retriever", 50, 50);
    noFill();
    stroke("#ff0000");
    rect(30, 60, 350, 300);


    fill("#ff0000");
    text("cat", 250, 80);
    noFill();
    stroke("#ff0000");
    rect(220, 70, 225, 280);
}               