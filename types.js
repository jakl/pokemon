var types = {
multiplier:function(user, target, a, b){
  if(a == undefined && b == undefined){
    if(this[user].Good.contains(target))
      return 1.5;
    else if(this[user].Bad.contains(target))
      return .5;
    else
      return 1;
  }
  else if (a != undefined && b != undefined){
    var user1 = user;
    var user2 = target;
    var target1 = a;
    var target2 = b;
    var multi=1;
    if(this[user1].Good.contains(target1))
        multi *= 2;
    if(this[user1].Good.contains(target2))
        multi *= 2;
    if(this[user1].Bad.contains(target1))
        multi /= 2;
    if(this[user1].Bad.contains(target2))
        multi /= 2;
    if(this[user2].Good.contains(target1))
        multi *= 2;
    if(this[user2].Good.contains(target2))
        multi *= 2;
    if(this[user2].Bad.contains(target1))
        multi /= 2;
    if(this[user2].Bad.contains(target2))
        multi /= 2;
  } else {
    return 1;
  }
},
Bug:{
  Good:['Grass','Psychic', 'Dark'],
  Bad: ['Fire', 'Fighting', 'Poison', 'Flying', 'Ghost', 'Steel']},
Dark :{
  Good:['Ghost','Psychic'],
  Bad:['Fighting','Dark Steel']},
Dragon :{
  Good:[' Dragon'],
  Bad:[' Ice','Steel']},
Electric :{
  Good:['Water','Flying'],
  Bad:['Grass','Electric','Ground','Dragon']},
Fighting :{
  Good:['Normal','Ice','Rock','Dark','Steel'],
  Bad:['Poison','Flying','Bug','Ghost ','Psychic']},
Fire :{
  Good:['Grass','Ice','Bug','Steel'],
  Bad:['Water','Fire','Dragon','Rock']},
Flying :{
  Good:['Grass','Fighting','Bug'],
  Bad:['Electric','Rock','Steel']},
Ghost :{
  Good:['Ghost','Psychic'],
  Bad:['Dark','Steel']},
Grass :{
  Good:['Water','Ground','Rock'],
  Bad:['Fire','Grass','Poison','Flying','Bug','Dragon','Steel']},
Ground :{
  Good:['Fire','Poison','Electric','Rock','Steel'],
  Bad:['Grass','Flying','Bug']},
Ice :{
  Good:['Grass','Ground','Flying','Dragon'],
  Bad:['Water','Ice','Fire','Steel']},
Normal :{
  Good:[],
  Bad:[' Fighting','Ghost','Rock','Steel']},
Poison :{
  Good:['Grass'],
  Bad:['Poison','Ground','Rock','Ghost','Steel']},
Psychic :{
  Good:['Fighting','Poison'],
  Bad:['Psychic','Dark','Steel']},
Rock :{
  Good:['Ice','Fire','Flying','Bug'],
  Bad:['Fighting','Ground','Steel']},
Steel :{
  Good:['Ice','Rock'],
  Bad:['Water','Fire','Water','Steel']},
Water :{
  Good:[' Fire','Ground','Rock'],
  Bad:[' Water','Grass','Dragon']}
}
