function setup() {
    canvas = createCanvas(640,480);
    canvas.position(150,150);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}


function draw() {
    image(video,230,150,220,200);

    fill(0,128,0);
    stroke(0,128,0);
    rect(90,40,460,20);

    fill(0,128,0);
    stroke(0,128,0);
    rect(90,420,460,20);

    fill(0,128,0);
    stroke(0,128,0);
    rect(30,80,20,350);

    fill(0,128,0);
    stroke(0,128,0);
    rect(580,30,20,380);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);
    
    fill(255,0,0);
    stroke(255,0,0);
    circle(590,50,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(589,425,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,425,80);

}

function take_snapshot(){    
    save('myFilterImage.png');
  }