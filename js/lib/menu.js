var Menu = (function() {

	this.title = "Nuclear Reaction";
	this.buttonsAlpha = 1.0

	this.drawTitle = (function() {
			graphics.drawText(100 , 100, "80px", this.title, "blue");
	});

	this.fadeEnable = (function(){

		fade.active = true;

		if(fade.active && fade.path === "directions")
		{
				this.buttonsAlpha -= 0.05;
				if(this.buttonsAlpha < 0)
				{ this.buttonsAlpha = 0; scene.type = "directions" }
		}

	})

	this.update = (function() {
		neutrinoRain.update();
		this.fadeEnable();
	});

	this.draw = (function() {
		graphics.ctx.save();
		graphics.ctx.globalAlpha = this.buttonsAlpha;
		buttons.draw();
		this.drawTitle();
		neutrinoRain.draw();
		graphics.ctx.restore();
	});

});
var menu = new Menu();
