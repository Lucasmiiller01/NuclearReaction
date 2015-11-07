var Manager = (function(){

	this.update = (function(){
		hydrogen.update();
		sound.update();
		neutrino.update();
	});

	this.draw = (function(){
		hydrogen.draw();
		neutrino.draw();
	});

});
var manager = new Manager();
