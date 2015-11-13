var Scene = (function() {

	this.scene = "menu"

	this.update = (function() {

		if(this.scene === "menu")
		{
			menu.update();
			sound.update();
		}

		if(this.scene === "gameplay")
		{
			atom.update();
			sound.update();
			neutrinoRain.update();
		}

	});

	this.draw = (function() {

		if(this.scene === "menu")
		{
			background.draw();
			menu.draw();
		}

		if(this.scene === "gameplay")
		{
			background.draw();
			atom.draw();
			hud.draw();
			neutrinoRain.draw();
		}

	});

});
var scene = new Scene();
