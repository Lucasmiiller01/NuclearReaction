var Atom = (function(name){

	this.x = (graphics.canvas.width / 2);
	this.y = (graphics.canvas.height / 2);

	this.name = name;

	this.r = 10;

	this.speed = 5;

	this.isMoveUp = false;
	this.isMoveDown = false;
	this.isMoveRight = false;
	this.isMoveLeft = false;

	this.move = (function(){

		if(this.isMoveUp)
		{ this.y += this.speed;}

		if(this.isMoveDown)
		{ this.y -= this.speed;}

		if(this.isMoveRight)
		{this.x += this.speed;}

		if(this.isMoveLeft)
		{ this.x -= this.speed;}
	});

	this.update = (function(){
		this.move();
	});

	this.drawProtons = (function(){

		switch (this.name)
		{
			case "hydrogen":
				graphics.drawCicle(this.x, this.y, 10, "blue");
			break;

			case "helium":
				graphics.drawCicle(this.x - 10, this.y, this.r, "blue");
				graphics.drawCicle(this.x + 10, this.y, this.r, "blue");
				graphics.drawCicle(this.x, this.y - 10, this.r, "Brown");
				graphics.drawCicle(this.x, this.y + 10, this.r, "Brown");
			break;

		}

	})

	this.draw = (function(){

			this.drawProtons();

	});

});
var hydrogen = new Atom("helium");
