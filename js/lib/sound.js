var Sound = (function() {
  this.music = new Audio();
  this.src = "MusicGameplay.mp3";

  this.update = (function() {
    this.music.play();
  });

});
var sound = new Sound();
