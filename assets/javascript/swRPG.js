var myGame;

class Game{
    constructor(){
        this.characterArray = [["C3PO", 50, 1, 4], ["R2D2", 25, 3, 4], ["BB8", 15, 5, 10]];
        this.myCharacter;
        this.target;
        this.updateScreen();
    }

    updateScreen(){
        this.updatePlayerHTML();
        this.updateFieldHTML();
        this.updateTargetHTML();
    }

    updatePlayerHTML(){
        if(this.myCharacter){
            $(".player").html(
                '<div><img src="assets/images/'+this.myCharacter[0]+'.jpg" />' +
                '<h1>Player Health: '+this.myCharacter[1]+'</h1></div>'
            );
        } else {
            $(".player").html("<h2>Character Select</h2>");
        }
    }

    updateFieldHTML(){
        if(this.target){
            $(".field").html('<div id="report">Prepare for battle!</div>');
        } else {
            var charImgString = "";
            for(var i = 0; i<this.characterArray.length; i++){ //Sets up an img using the following criteria
                charImgString+='<img onclick="myGame.imgClickDefiner(event.target)" class="charImg"' //img of class charImg
                    +'id="'+this.characterArray[i][0]+`"` //with an id of the first element in the character aray
                    +'src="assets/images/'+this.characterArray[i][0]+`.jpg"` //with img from source
                    +'value="'+i+'" />' //With a value of the index in array
            }
            $(".field").html(charImgString);
        }
    }

    updateTargetHTML(){
        if(this.target){
            var targetHTML = '<img src="assets/images/'+this.target[0]+'.jpg" />'
            targetHTML += '<div style="text-align: center"><h1>Health: '+this.target[1]+'</h1>';
            targetHTML += '<button onclick="myGame.fight()">Attack!</button></div>'
            $(".target").html(targetHTML);
        } else {
            $(".target").html("");
        }
    }

    imgClickDefiner(input){
        if(!this.myCharacter){
            this.assignCharacterToPlayer(input);
            this.characterArray.splice(input.id, 1);
        } else if(!this.target){
            this.assignCharacterToTarget(input);
            this.characterArray.splice(input.id, 1);
            $("#report").text("");
        } else {
            alert("You have already chosen your opponent.")
        }
        this.updateScreen();
    }

    assignCharacterToPlayer(input){
        $("#"+input.id).remove();
        this.myCharacter = this.characterArray[input.attributes.value.value];
        this.myCharacter[3] = 0;
    }

    assignCharacterToTarget(input){
        $("#"+input.id).remove();
        this.target = this.characterArray[input.attributes.value.value];
    }

    fight(){
        this.myCharacter[3] += this.myCharacter[2];
        this.target[1] -= this.myCharacter[3];
        if(this.target[1]<=0){
            this.target="";
            this.checkForWin();
        } else {
            this.myCharacter[1] -= this.target[3];
            this.checkForLoss();
        }
    }

    checkForWin(){
        if(0 >= this.characterArray.length){
            alert("Victory! You are the greatest droid!");
            this.myCharacter="";
            startNewGame();
        } else {
            $("#report").text("Select Your Next Opponent");
            this.updateScreen();
        }
    }

    checkForLoss(){
        if(this.myCharacter[1]<=0){
            alert("You have been defeated.")
            startNewGame();
        } else {
            this.updateScreen();
            $("#report").text("You dealt "+this.myCharacter[3]+" damage! And you received "+this.target[3]+" damage!")
        }
    }
}

$(function(){
    startNewGame();
});

function startNewGame(){
    myGame = new Game;
}