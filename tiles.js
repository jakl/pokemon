var zones = {
  get_sprite_name :
  function (zone, x, y){
    return this.mapping[this[zone].tiles.y.substr(x-1,1)].name
  },
  mapping :
  {
    'g' :
    {
      name : 'grass',
      can_walk : true,
//    sprite_name : 'grass2',
    },
    ' ' :
    {
      name : 'blank',
    },
  },
}
