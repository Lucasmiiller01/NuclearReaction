var Menu = (function() {

	this.title = "Nuclear Reaction";

	this.drawTitle = (function() {
			graphics.drawText(100 , 100, "80px", this.title, "blue");
			buttons.draw();
	});

	this.update = (function() {
		buttons.update();
		neutrinoRain.update();
	});

	this.draw = (function() {
		neutrinoRain.draw();
		this.drawTitle();
	});

});
var menu = new Menu();
