$(document).ready(function(){

soundManager.setup({
  url: 'swf/',
  onready: function(){

$("#Mushroom").on("click", function(){
  var mySound = soundManager.createSound({
  url: 'mario_sounds/mushroom.mp3'
  });
  mySound.play();

})
  },
  ontimeout: function(){
  }
});

$("#Warppipe").on("click", function(){
  var mySound2 = soundManager.createSound({
  url: 'mario_sounds/warp_pipe.mp3'
  })
  mySound2.play();
})

$("#Starpower").on("click", function(){
  var mySound3 = soundManager.createSound({
  url: 'mario_sounds/starman.mp3'
  })
  mySound3.play();
})

$("#M64").on("click", function(){
  var mySound4 = soundManager.createSound({
  url: 'mario_sounds/m64.mp3'
  })
  mySound4.play();
})

$("#1up").on("click", function(){
  var mySound5 = soundManager.createSound({
  url: 'mario_sounds/14-1-up.mp3'
  })
  mySound5.play();
})

$("#Timeup").on("click", function(){
  var mySound6 = soundManager.createSound({
  url: 'mario_sounds/timeup.mp3'
  })
  mySound6.play();
})

$("#Level1-1").on("click", function(){
  var mySound7 = soundManager.createSound({
  url: 'mario_sounds/mario 1-1.mp3'
  })
  mySound7.play();
})

$("#Level1-2").on("click", function(){
  var mysound8 = soundManager.createSound({
  url: 'mario_sounds/06-underground.mp3'
  })
  mysound8.play();
})

$("#Allclear").on("click", function(){
  var mySound9 = soundManager.createSound({
  url: 'mario_sounds/mario all clear.mp3'
  })
  mySound9.play();
})

})