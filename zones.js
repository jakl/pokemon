var zones = {
  get_sprite:function(zone, x, y){
      x = Math.floor(x); y = Math.floor(y);
      if(x<0 || y<0 || y>=this.overworld.tiles.length || x>=this.overworld.tiles[y].length)
        return sprites.blank;
      var tile = this.overworld.tiles[y].substring(x,x+1);
      return sprites[this.mapping[tile].name]
  },
  mapping : {
    g : { name : 'grass', },
    d : { name : 'dirt',  },
    c : { name : 'cave',  },
    ' ' : { name : 'blank', },
  },
  overworld : {
    tiles : [
    'gcggcg',
    'ggggcg',
    'ggggcg',
    'gggggc',
    ],
    objects : 
    [
      {
        name : 'house',
        x : 0,
        y : 0,
        w : 1,
        h : 1,
        can_walk : false,
      },
    ],
  },
}
