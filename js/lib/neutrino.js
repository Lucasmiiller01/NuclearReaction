var Neutrino = (function() {

	this.isOneNextInside = false;
	this.x = Math.floor(Math.random() * (graphics.canvas.width));
	this.y = Math.floor(Math.random() * (graphics.canvas.height));

	this.move = (function() {

		this.x +=  Math.floor(Math.random() * 15);
		this.y +=  Math.floor(Math.random() * 15);

		if(((this.x > 0) && (this.x < graphics.canvas.width)) && ((this.y > 0) && (this.y < graphics.canvas.height)))
		{ this.isOneNextInside = true; }

		else
		{ this.isOneNextInside = false; }
	});

	this.update = (function() {
		this.move();
		console.log(this.isOneNextInside)
	});

	this.draw = (function() {
		graphics.drawCicle(	this.x, this.y, 5, "#CC0000");
	});

});
var neutrino = new Neutrino();
