var keyboard = (function()
{
	this.keydown = (function(e){
		switch(e.keyCode)
		{
			default: console.log("KeyCode: " + e.keyCode + " is pressed"); break;
		}

		if(e.keyCode === 65 || e.keyCode === 37)
		{
				hydrogen.isMoveLeft = true;
		}

		if(e.keyCode === 39 || e.keyCode === 68)
		{
				hydrogen.isMoveRight = true;
		}

		if(e.keyCode === 38 || e.keyCode === 87)
		{
				hydrogen.isMoveDown = true;
		}

		if(e.keyCode === 40 || e.keyCode === 83)
		{
				hydrogen.isMoveUp = true;
		}

	});

	this.keyup = (function(e){
		switch(e.keyCode)
		{
			default: console.log("KeyCode: " + e.keyCode + " is unpressed"); break;
		}

		if(e.keyCode === 65 || e.keyCode === 37)
		{
				hydrogen.isMoveLeft = false;
		}

		if(e.keyCode === 39 || e.keyCode === 68)
		{
				hydrogen.isMoveRight = false;
		}
		if(e.keyCode === 38 || e.keyCode === 87)
		{
				hydrogen.isMoveDown = false;
		}
		if(e.keyCode === 40 || e.keyCode === 83)
		{
				hydrogen.isMoveUp = false;
		}
	});
});

var keyboard = new keyboard();

document.addEventListener('keydown', keyboard.keydown, true);
document.addEventListener('keyup', keyboard.keyup, true);
