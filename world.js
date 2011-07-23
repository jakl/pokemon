var world = {
  //Tile width/height in pixels, set by main
  tile_width:0,tile_height:0,

  resize_tiles:function(w,h){
    this.tile_width = w/this.player.view_width;
    this.tile_height = h/this.player.view_height;
  },

  player:Object.create(character),
  
  //Draw the view using canvas object g, scaled to w and h
  draw:function(g){
    var player = this.player;

    //upper left corner of view
    var view_x = player.view_x_center-player.view_width/2;
    var view_y = player.view_y_center-player.view_height/2;

    var tw = this.tile_width; var th = this.tile_height;

    for(var x=view_x; x<view_x+player.view_width; x++)
      for(var y=view_y; y<view_y+player.view_height; y++)
        g.drawImage(zones.get_sprite(player.zone, x, y), (x-view_x)*tw, (y-view_y)*th, tw, th);
    g.drawImage(sprites.trainer, player.get_x()*tw, player.get_y()*th, tw, th);
  },

  mouse:function(x,y){
    if(x > .9)
      player.view_x_center+=1;
    if(x < .1)
      player.view_x_center-=1;
    if(y > .9)
      player.view_y_center+=1;
    if(y < .1)
      player.view_y_center-=1;
  },

  zoom:function(distance){
    this.player.view_height+=2*distance;
    this.player.view_width+=4*distance;
  },
}
