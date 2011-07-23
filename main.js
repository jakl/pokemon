var main = {
  up:false,down:false,left:false,right:false,space:false,other:false,

  tic:function(){
    this.paint();
    //setTimeout("main.tic()", 60);
  },
  resize:function(){
    main.g.canvas.width = window.innerWidth*.95;
    main.g.canvas.height = window.innerHeight*.95;
    world.resize_tiles(main.g.canvas.width,main.g.canvas.height);
    main.paint();
  },
  init:function(){
    this.g = document.getElementById('canvas').getContext('2d');

    //document.onmouseup = function(e){}
    //document.onmousedown = function(e){}
    document.onmousemove = function(e){
      world.mouse(e.pageX/main.g.canvas.width,e.pageY/main.g.canvas.height);
    }
    document.onmousewheel = function (e){
      world.zoom(-e.wheelDelta/120);
      main.resize();
      main.paint();
    }
    window.onresize=this.resize;

    this.resize();
  },
  paint:function(){
    this.g.fillStyle = '#000';
    this.g.fillRect(0,0,this.g.canvas.width,this.g.canvas.height);
    
    world.draw(this.g);
   
    this.draw_controls();
  },
  draw_controls:function(){
    this.g.fillStyle = '#ccc';
    this.draw_control_y = 40;
    this.draw_control("Mouse Wheel - Zoom");
    this.draw_control("Mouse Position - Move Pokemon Trainer");
    this.draw_control("Mouse Screen Edges - Scroll View of World");
  },
  draw_control:function(message){
    this.g.fillText(message,this.g.canvas.width/2,this.draw_control_y+=20);
  },
  key_down:function(e){
      if (e.keyCode == 39) {right=true;}
      else if (e.keyCode == 37) {this.left=true;}
      else if (e.keyCode == 38) {this.up=true;}
      else if (e.keyCode == 40) {this.down=true;}
      else if (e.keyCode == 32) {this.space=true;}
      else {this.other=true;}
      this.paint();
    return true;//false to capture input and decieve browser
  },
  key_up:function(e){
      if (e.keyCode == 39) {this.right=false;}
      else if (e.keyCode == 37) {this.left=false;}
      else if (e.keyCode == 38) {this.up=false;}
      else if (e.keyCode == 40) {this.down=false;}
      else if (e.keyCode == 32) {this.space=false;}
      else {this.other=false;}
      this.paint();
    return true;//false to capture input and decieve browser
  },
}
