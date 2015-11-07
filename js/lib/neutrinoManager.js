var NeutrinoManager = (function(){

	this.neutrinos = new Array();
	this.directionOptions = ["Up-Down","Left-Right", "Down-Up", "Right-Left"];

	this.update = (function(){

		for(var i = 0; i < 10; i++)
		{
				this.neutrinos[i] = new Neutrino();
				this.neutrinos[i].direction = this.directionOptions[Math.floor(Math.random() * (this.directionOptions.length))];
				this.neutrinos[i].update();

				if((this.neutrinos[i].x > 800) || (this.neutrinos[i].y > 600) ||
					((this.neutrinos[i].x < 0 || this.neutrinos[i].y < 0) && (this.neutrinos[i].isOneNextInside)))
						{ this.neutrinos.splice(i); }

		}

		console.log(this.neutrinos.length);

	});

	this.draw = (function(){

		for(var i = 0; i < this.neutrinos.length; i++)
		{ this.neutrinos[i].draw(); }

	});

});
var neutrinoManager = new NeutrinoManager();
