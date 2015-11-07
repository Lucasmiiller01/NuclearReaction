var Manager = (function(){

	this.update = (function(){
		hydrogen.update();
		sound.update();
		neutrinoManager.update();
	});

	this.draw = (function(){
		hydrogen.draw();
		neutrinoManager.draw();
	});

});
var manager = new Manager();
