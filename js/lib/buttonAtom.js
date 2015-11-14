var Atom = (function(){

	this.x = (graphics.canvas.width / 2);
	this.y = (graphics.canvas.height / 2);

	this.eletronAngle = 0;

	this.name = "hydrogen";

	this.r = 10;

	this.update = (function(){
	});

	this.drawAtom = (function(){

		switch (this.name)
		{
			case "hydrogen":

					// Fist eletron orbit
					graphics.drawGirth(this.x,this.y, 42.5, "#5D5D5D");

					// Protons
					graphics.drawCicle(this.x, this.y, 10, "#CC0000");

					// Eltrons velocity
					this.eletronAngle += 10;

					// Eletron
					graphics.ctx.save();
					graphics.ctx.translate(this.x, this.y);
					graphics.ctx.rotate(this.eletronAngle * Math.PI / 100); // 90 + widht of quadrate?
					graphics.drawCicle(30, 30, 5, "#00CC00");
					graphics.ctx.restore();

			break;

			case "helium":

					// Atom background
					graphics.ctx.save();
					graphics.ctx.globalAlpha = 0.65;
					graphics.drawCicle(this.x, this.y, 54.1, "#eee");
					graphics.ctx.restore();

					// Fist eletron orbit
					graphics.drawGirth(this.x,this.y, 42.5, "#5D5D5D");
					// Second eletron orbit
					graphics.drawGirth(this.x,this.y, 55, "#5D5D5D");

					// Neutrons
					graphics.drawCicle(this.x - 10, this.y, this.r, "#CC0000");
					graphics.drawCicle(this.x + 10, this.y, this.r, "#CC0000");
					// Protons
					graphics.drawCicle(this.x, this.y - 10, this.r, "#000099");
					graphics.drawCicle(this.x, this.y + 10, this.r, "#000099");

					// Eltrons velocity
					this.eletronAngle += 10;

					// Fist eletron
					graphics.ctx.save();
					graphics.ctx.translate(this.x, this.y);
					graphics.ctx.rotate(this.eletronAngle * Math.PI / 100); // 90 + widht of quadrate?
					graphics.drawCicle(30, 30, 5, "#00CC00");
					graphics.ctx.restore();

					// second eletron
					graphics.ctx.save();
					graphics.ctx.translate(this.x, this.y);
					graphics.ctx.rotate(this.eletronAngle * Math.PI / 180); // 90 + widht of quadrate?
					graphics.drawCicle(40, 40, 5, "#00CC00");
					graphics.ctx.restore();

			break;

			case "lithium":

					// Atom background
					graphics.drawCicle(this.x, this.y, 70.4, "#ffffff");
					// Fist eletron orbit
					graphics.drawGirth(this.x,this.y, 42.5, "#5D5D5D");
					// Second eletron orbit
					graphics.drawGirth(this.x,this.y, 55, "#5D5D5D");
					// Third eletron orbit
					graphics.drawGirth(this.x,this.y, 70.5, "#5D5D5D");

					// Protons
					graphics.drawCicle(this.x, this.y - 12.5, this.r, "#000099");
					graphics.drawCicle(this.x + 10, this.y + 10, this.r, "#000099");
					graphics.drawCicle(this.x - 10, this.y + 10, this.r, "#000099");

					// Neutrons
					graphics.drawCicle(this.x - 10, this.y - 8.5, this.r, "#CC0000");
					graphics.drawCicle(this.x + 10, this.y - 8.5, this.r, "#CC0000");
					graphics.drawCicle(this.x, this.y + 12.5, this.r, "#CC0000");

					// Proton middle
					graphics.drawCicle(this.x, this.y, this.r, "#000099");

					// Eltrons velocity
					this.eletronAngle += 10;

					// Fist eletron
					graphics.ctx.save();
					graphics.ctx.translate(this.x, this.y);
					graphics.ctx.rotate(this.eletronAngle * Math.PI / 50); // 90 + widht of quadrate?
					graphics.drawCicle(30, 30, 5, "#00CC00");
					graphics.ctx.restore();

					// second eletron
					graphics.ctx.save();
					graphics.ctx.translate(this.x, this.y);
					graphics.ctx.rotate(this.eletronAngle * Math.PI / 100); // 90 + widht of quadrate?
					graphics.drawCicle(40, 40, 5, "#00CC00");
					graphics.ctx.restore();

					// Third eletron
					graphics.ctx.save();
					graphics.ctx.translate(this.x, this.y);
					graphics.ctx.rotate(this.eletronAngle * Math.PI / 180); // 90 + widht of quadrate?
					graphics.drawCicle(50, 50, 5, "#00CC00");
					graphics.ctx.restore();

			break;
		}


	});

	this.draw = (function(){
			this.drawAtom();
	});

});
var atom = new Atom();
