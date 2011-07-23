var character = {
  x:3,//position in current zone
  y:3,
  get_x:function(){//position in view
    return Math.ceil(this.view_width/2+this.x-this.view_x_center);
  },
  get_y:function(){//position in view
    return Math.ceil(this.view_height/2+this.y-this.view_y_center);
  },
  view_width:10,
  view_height:5,
  view_x_center:5,//center of view
  view_y_center:5,
  zone:'overworld',
}
