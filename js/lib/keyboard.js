var keyboard = (function()
{
	this.keydown = (function(e){

		if(e.keyCode === 65 || e.keyCode === 37)
		{
				atom.isMoveLeft = true;
		}

		if(e.keyCode === 39 || e.keyCode === 68)
		{
				atom.isMoveRight = true;
		}

		if(e.keyCode === 38 || e.keyCode === 87)
		{
				atom.isMoveDown = true;
		}

		if(e.keyCode === 40 || e.keyCode === 83)
		{
				atom.isMoveUp = true;
		}

	});

	this.keyup = (function(e){

		if(e.keyCode === 65 || e.keyCode === 37)
		{
				atom.isMoveLeft = false;
		}

		if(e.keyCode === 39 || e.keyCode === 68)
		{
				atom.isMoveRight = false;
		}
		if(e.keyCode === 38 || e.keyCode === 87)
		{
				atom.isMoveDown = false;
		}
		if(e.keyCode === 40 || e.keyCode === 83)
		{
				atom.isMoveUp = false;
		}
	});
});

var keyboard = new keyboard();

document.addEventListener('keydown', keyboard.keydown, true);
document.addEventListener('keyup', keyboard.keyup, true);
