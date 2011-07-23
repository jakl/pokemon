var sprites = {
  get_image:function(name){
    var tmp = new Image();
    tmp.src=name;
    return tmp;
  },
  init:function(){
    this.grass=   this.get_image('grass.png');
    this.lava=    this.get_image('lava.png');
    this.water=   this.get_image('water.png');
    this.trainer= this.get_image('trainer.gif');
    this.cave=    this.get_image('cave.png');
    this.blank=   this.get_image('water.png');
  },
}
sprites.init();
