var Menu = (function() {

	this.menuAlpha = 1.0;
	this.directionsAlpha = 0.0;

	this.atom = new Atom("lithium", "Menu");
	this.atom.x = 200;

	this.fadeEnable = (function(){

		fade.active = true;

		if(fade.active && fade.path === "directions")
		{
				this.menuAlpha -= 0.05;

				if(this.menuAlpha <= 0)
				{
					this.menuAlpha = 0;
					this.directionsAlpha += 0.05;
				}

				if(this.directionsAlpha >= 1 && fade.active)
				{
					this.directionsAlpha = 1;
					fade.active = false;
				}

		}
	})

	this.update = (function() {
		neutrinoRain.update();
		this.fadeEnable();
	});

	this.drawDirections = (function(){
			graphics.drawText(225 , 100, "80px", "Directions", "blue");

			if(this.menuAlpha <= 0)
			{ this.atom.draw(); }
	});

	this.drawMain = (function(){
		graphics.drawText(100 , 100, "80px", "Nuclear Reaction", "blue");
		buttons.draw();
	});

	this.drawTexts = (function(){
		graphics.drawText(160 , 435, "50px", "You", "Green");
		graphics.drawText(510 , 375, "50px", "How you", "Green");
		graphics.drawText(490 , 440, "50px", "need evite", "Green");
	});

	this.draw = (function() {

		// Draw neutrinos rain
		graphics.ctx.save();
		graphics.ctx.globalAlpha = this.menuAlpha;
		this.drawMain();
		neutrinoRain.draw();
		graphics.ctx.restore();

		// Draw main menu
		graphics.ctx.save();
		graphics.ctx.globalAlpha = this.directionsAlpha;
		this.drawDirections();
		graphics.drawCicle(600,(graphics.canvas.height / 2), 5, "#CC0000");
		this.drawTexts();
		graphics.ctx.restore();

	});

});
var menu = new Menu();
