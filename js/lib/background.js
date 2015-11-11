var Background = (function(){

  this.update = (function(){

  });

  this.draw = (function() {
    for(var i = 0; i <= 50; i++)
    {
       graphics.drawLine(0 , i * 12 , 800, i * 12);
       graphics.drawLine(i * 16, 0 , i * 16, 600);
    }
  });

});
var background = new Background();
