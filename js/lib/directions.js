var Directions = (function() {

	this.title = "Directions";
	this.atom = new Atom("lithium");

	this.updateAtom = (function(){
		this.atom.x = 200;
		this.atom.y = 300;
	});

	this.update = (function() {
		this.atom.update();
		this.updateAtom();
	});

	this.draw = (function() {
		this.atom.draw();
		graphics.drawText(225 , 100, "80px", this.title, "blue");
		graphics.drawText(155 , 425, "50px", "You", "Green");
		graphics.drawCicle(425, 250, 5, "#CC0000");
	});

});
var directions = new Directions();
