var keysDown = {};

function init() {

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

}

init();


if (38 in keysDown) { // Player holding up
		alert('hi');
	}


var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		alert('hi');
	}
	if (40 in keysDown) { // Player holding down
		alert('hi');
	}
	if (37 in keysDown) { // Player holding left
		alert('hi');
	}
	if (39 in keysDown) { // Player holding right
		alert('hi');
	}
}





