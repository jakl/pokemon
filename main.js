var h, w, mousex, mousey;//Screen height and width, and mouse x and y positions
var g = document.getElementById('canvas').getContext('2d');

init();
tic();

function tic(){
  paint();
  setTimeout("tic()", 600);
}

window.onresize=resize;

function resize(){
  h = window.innerHeight*.95;
  w = window.innerWidth*.95;
  g.canvas.width = w;
  g.canvas.height = h;
}
 
function init(){
  resize();
  world.init();
}
 
//document.onmouseup = function(e){}
//document.onmousedown = function(e){}
document.onmousemove = function(e){
  mousex = e.pageX/w;
  mousey = e.pageY/h;
  world.mouse(mousex,mousey);
}
document.onmousewheel = function (e){
  world.zoom(-e.wheelDelta/120);
}

function paint(){
  g.fillStyle = '#000';
  g.fillRect(0,0,w,h);
  
  world.drawWorld();
 
  drawControls();
}
 
function drawControls(){
  g.fillStyle = '#ccc';
  controlYPos = 40;
  drawControl("Mouse Wheel - Zoom");
  drawControl("Mouse Position - Move Pokemon Trainer");
  drawControl("Mouse Screen Edges - Scroll View of World");
}

//var controlYPos=40;
function drawControl(message){
  g.fillText(message,w/2,controlYPos+=20);
}
 
var up=false,down=false,left=false,right=false,space=false,other=false;
 
function key_down(e) {
    if (e.keyCode == 39) {right=true;}
    else if (e.keyCode == 37) {left=true;}
    else if (e.keyCode == 38) {up=true;}
    else if (e.keyCode == 40) {down=true;}
    else if (e.keyCode == 32) {space=true;}
    else {other=true;}
	return true;//false to capture input and decieve browser
}
function key_up(e) {
    if (e.keyCode == 39) {right=false;}
    else if (e.keyCode == 37) {left=false;}
    else if (e.keyCode == 38) {up=false;}
    else if (e.keyCode == 40) {down=false;}
    else if (e.keyCode == 32) {space=false;}
    else {other=false;}
  return true;//false to capture input and decieve browser
}
