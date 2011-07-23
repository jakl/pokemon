function getImage(name){
  var tmp = new Image();
  tmp.src=name;
  return tmp;
}

var world = {
  //World Width & Height: Quantity of tiles that make up this world
  ww:80,wh:80,
  //View Width & Height: Quantity of tiles that make up the current view
  vw:10,vh:5,
  //View X & Y: Upper Left corner of the view, on the world
  vx:0,vy:0,
  //Player X & Y: Tile within the world, that the player currently is on
  px:1,py:2,
  //Player Destination X & Y: Tile which the player is moving towards
  pdx:1,pdy:2,
  
  //Images, in a hash table
  sprites:{ grass:getImage('grass.png'),
            lava: getImage('lava.png'),
            water:getImage('water.png'),
            trainer:getImage('trainer.gif'),
            cave:getImage('cave.png')},
  
  //2D Array of tiles, making the current world
  tiles:[],
  
  //Draw the world using canvas object g, scaled to w and h
  drawWorld:function(){
    for(var x=0;x<this.ww;x++)
      for(var y=0;y<this.wh;y++)
        this.drawRelative(x,y,this.tiles[x][y]);

    var py=this.py, px=this.px, pdy=this.pdy, pdx=this.pdx;
    
    if(pdx != px || pdy != py)
      if(Math.abs(pdx-px) > Math.abs(pdy-py))
        this.px += (pdx-px>0)?1:-1;
      else
        this.py += (pdy-py>0)?1:-1;

    this.drawRelative(px, py, this.sprites.trainer);
  },
  
  drawRelative:function(x,y,image){
    var vx = this.vx;
    var vy = this.vy;
    var vw = this.vw;
    var vh = this.vh;
    var tw = w/vw;//a single tile's width, scaled to width of screen
    var th = h/vh;//tile height
    if(x < vx || x > vx+vw || y < vy || y > vy+vh)
      return;
    g.drawImage(image, (x-vx)*tw, (y-vy)*th, tw, th);
  },

  mouse:function(x,y){
    this.pdx = Math.floor(this.vw * x)+this.vx;
    this.pdy = Math.floor(this.vh * y)+this.vy;
    if(x > .9)
      this.vx+=1;
    if(x < .1)
      this.vx-=1;
    if(y > .9)
      this.vy+=1;
    if(y < .1)
      this.vy-=1;
  },

  zoom:function(distance){
    this.vh+=2*distance;
    this.vw+=4*distance;
    this.vx-=2*distance;
    this.vy-=1*distance;
  },

  init:function(){
    zones.load('a.js');

    for(var x=0;x<this.ww;x++)
      this.tiles[x] = [];

    for(var x=0;x<this.ww;x++)
      for(var y=0;y<this.wh;y++)
        this.tiles.x.y = zones.get_sprite_name('a',x,y);
/*      
        var rand = Math.random();
        if(rand > .8)
          this.tiles[x][y] = this.sprites.grass;
        else if(rand > .6)
          this.tiles[x][y] = this.sprites.lava;
        else if(rand > .4)
          this.tiles[x][y] = this.sprites.water;
        else
          this.tiles[x][y] = this.sprites.cave;
      }
*/
  }
}
