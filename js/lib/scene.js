var Scene = (function() {

	this.scene = "gameplay"

	this.update = (function() {
		if(this.scene === "gameplay")
		{
			atom.update();
			sound.update();
			//neutrinoRain.update();
		}
	});

	this.draw = (function() {
		if(this.scene === "gameplay")
		{
			background.draw();
			atom.draw();
			hud.draw();
			//neutrinoRain.draw();
		}
	});

});
var scene = new Scene();
