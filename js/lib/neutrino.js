var Neutrino = (function(direction) {

	this.isOneNextInside = false;
	this.direction = direction;
	this.x = 0;
	this.y = 0;

	this.move = (function() {

		if(((this.x > 0) && (this.x < graphics.canvas.width)) && ((this.y > 0) && (this.y < graphics.canvas.height)))
		{ this.isOneNextInside = true; }

		else
		{ this.isOneNextInside = false; }

			switch (this.direction)
			{
				case "Up-Down": this.y += 10; break;
				case "Left-Right": this.x += 10; break;
				case "Down-Up": this.y -= 10; break;
				case "Right-Left": this.y -= 10; break;
			}
	});

	this.restoreToInitPos()
	{
		this.x =
	}

	this.update = (function() {
		this.move();
	});

	this.draw = (function() {
		graphics.drawCicle(	this.x, this.y, 5, "#CC0000");
	});

});
var neutrino = new Neutrino("Up-Down");
