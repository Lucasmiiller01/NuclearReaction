var Buttons = (function(){

  this.playX = 350;
  this.playY = 250;

    this.playPivotY = this.playY - 50
    this.playWidth = 70;
    this.playHeight = 70;

  this.directionX = 200;
  this.directionY = 350;

    this.directionPivotY = this.directionY - 50
    this.directionWidth = 360;
    this.directionHeight = 70;


  this.creditsX = 285;
  this.creditsY = 450;

    this.creditsPivotY = this.creditsY - 50
    this.creditsWidth = 360;
    this.creditsHeight = 70;

  this.update = (function(){

  });

  this.draw = (function() {
      graphics.drawStrokeRect(this.playX, this.playPivotY, this.playWidth + 50, this.playHeight, "BLACK");
      graphics.drawStrokeRect(this.directionX, this.directionPivotY, this.directionWidth + 50, this.directionsHeight, "BLACK");
      graphics.drawText(this.playX, this.playY, "70px", "Play", "Green");
      graphics.drawText(this.directionX, this.directionY, "70px", "Instructions", "Green");
      graphics.drawText(this.creditsX, this.creditsY, "70px", "Credits", "Green");

  });

});

var buttons = new Buttons();
