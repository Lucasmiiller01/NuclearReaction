var Manager = (function(){

	this.update = (function(){
		hydrogen.update();
	});

	this.draw = (function(){
		hydrogen.draw();
	});

});
var manager = new Manager();
