var keyboard = (function()
{
	this.keydown = (function(e){
		switch(e.keyCode)
		{
			default: console.log("KeyCode: " + e.keyCode + " is pressed"); break;
		}
		
		if(e.keyCode === 65 || e.keyCode === 37)
		{
			//andar para a esquerda.
		}
		
		if(e.keyCode === 39 || e.keyCode === 68)
		{
			//andar para a direita.
		}
		if(e.keyCode === 38 || e.keyCode === 87)
		{
			//andar para a cima.
		}
		if(e.keyCode === 40 || e.keyCode === 83)
		{
			//andar para a cima.
		}
		
	});
	
	this.keyup = (function(e){
		switch(e.keyCode)
		{
			default: console.log("KeyCode: " + e.keyCode + " is unpressed"); break;
		}
		
		if(e.keyCode === 65 || e.keyCode === 37)
		{
			// parar de andar para a esquerda.
		}
		
		if(e.keyCode === 39 || e.keyCode === 68)
		{
			// parar de andar para a direita.
		}
		if(e.keyCode === 38 || e.keyCode === 87)
		{
			// parar de andar para a cima.
		}
		if(e.keyCode === 40 || e.keyCode === 83)
		{
			// parar de  andar para a cima.
		}
	});
});

var keyboard = new keyboard();

document.addEventListener('keydown', keyboard.keydown, true);
document.addEventListener('keyup', keyboard.keyup, true);