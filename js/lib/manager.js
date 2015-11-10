var Manager = (function(){

	this.update = (function(){
		screen.update();
	});

	this.draw = (function(){
		screen.draw();
	});

});
var manager = new Manager();
