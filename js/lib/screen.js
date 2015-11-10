var Screen = (function() {

	this.scene = "gameplay"

	this.update = (function() {
		if(this.scene === "gameplay")
		{
			atom.update();
			sound.update();
			neutrinoRain.update();
		}
	});

	this.draw = (function() {
		if(this.scene === "gameplay")
		{
			atom.draw();
			neutrinoRain.draw();
		}
	});

});
var screen = new Screen();
