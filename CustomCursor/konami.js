
var potentialCode = []; 

addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {

    if (potentialCode[0] != 38) {
        potentialCode = [];
    }
   
    if (potentialCode.length == 2 && potentialCode[1] != 38) {
        potentialCode = [];
    }

    if (potentialCode.length == 3 && potentialCode[2] != 40) {
        potentialCode = [];
    }

    if (potentialCode.length == 4 && potentialCode[3] != 40) {
        potentialCode = [];
    }

    if (potentialCode.length == 5 && potentialCode[4] != 37) {
        potentialCode = [];
    }

    if (potentialCode.length == 6 && potentialCode[5] != 39) {
        potentialCode = [];c
    }

    if (potentialCode.length == 7 && potentialCode[6] != 37) {
        potentialCode = [];
    }

    if (potentialCode.length == 8 && potentialCode[7] != 39) {
        potentialCode = [];
    }

    if (potentialCode.length == 9 && potentialCode[8] != 66) {
        potentialCode = [];
    }

    if (potentialCode.length == 10 && potentialCode[9] != 65) {
        potentialCode = [];
    }

    if (potentialCode.length > 10) {
        potentialCode = [];
    }

    potentialCode.push(e.keyCode)


    if (potentialCode.length == 10) {

        document.getElementById("container").className = "waitingForCode";
    }


    document.getElementById("keys").innerHTML = potentialCode;

}


resetCursor = function () {

    document.getElementById("container").className = "none";

};