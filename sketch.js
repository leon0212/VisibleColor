var xspacing=2;    // wavelenght
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var wavelength=400;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var r;//colors
var g;
var b;
var vc;
//
var running = false; //
var cSlider; // these are sliders
var angularvelocity = 2;
var equation;
var cSliderLabel;
var onoff;


function setup() {
  createCanvas(1000, 700);
  w = width+16;

  noStroke();
  cSliderLabel = createP("VISIBLE LIGHT SPECTRUM");
  cSliderLabel.position(400,0);
  cSlider = createSlider(400, 700, 400);
  cSlider.elt.step=0.1;
  cSlider.position(280,70);
  cSlider.class("sim-sliderb");

  yvalues = new Array(floor(w/xspacing));
}

function draw() {
dx = (TWO_PI / wavelength) * xspacing;
wavelength= cSlider.value();
  var vc = cSlider.value();
  if ((399<vc) && (vc<455)){
  r=177;
  g=7;
  b=248;
  }
  
  if ((455<vc) && (vc<492)) {
  r=20;
  g=64;
  b=253;
  }
  
  if ((492<vc) && (vc<577)){
  r=49;
  g=203;
  b=37;
  }
  
  if ((577<vc) && (vc<597)){
  r=252;
  g=255;
  b=0;
  }
  
  if ((597<vc) && (vc<620)){
  r=255;
  g=150;
  b=0;
  }
  
  if ((620<vc) && (vc<700)){
  r=255;
  g=0; 
  b=0;
  }
  background(200);

  fill(r,g,b,20);
  rect(0,0,width,height);
  tint(255,127);
  fill(r,g,b);
  renderWave();
  calcWave();
  fill(10);
  text("violet",280,70);
  text("blue",355,70);
  text("green",405,70);
  text("yellow",500,70);
  text("orange",525,120);
  text("red",570,70);
  text(" Wavelength: " +int(cSlider.value())+ " (nanometers)", 700,95);
}

function calcWave() {
   // Increment theta (try different values for 
  // 'angular velocity' here
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
    fill(r,g,b);
  }

}

function renderWave() {
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    fill(r,g,b);
  	ellipse(x*xspacing, height/2.5+yvalues[x], 6, 6);
    fill(r,g,b,30);
    ellipse(x*xspacing, height/2.46+yvalues[x], 6, 6);
  }
}

function turnonoff() {
  // and of course it's nice to be able to stop it if things get crazy
    if (!running){
      running = true;
      loop();
      onoff.html("STOP");
      return
    }

    if (running){
      running = false;
      noLoop()
      onoff.html("START");
      return
    }

}