var myGame;

class Game{
    constructor(){
        this.characterArray = [["C3PO", 50, 1, 4], ["R2D2", 25, 3, 4], ["BB8", 15, 5, 10]];
        this.round = 0;
        this.victories = 0;
        this.myCharacter;
        this.target;
        this.setUpCharacterSelect();
    }

    setUpCharacterSelect(){ //A function to return the index.html page to starting conditions
        $(".header").html("<h2>Character Select</h2>"); //Resets Header page
        var charImgString = "";
        for(var i = 0; i<this.characterArray.length; i++){ //Sets up an img using the following criteria
            charImgString+='<img class="charImg" id="' //img of class charImg
                +this.characterArray[i][0] //with an id of the first element in the character aray
                +'" src="assets/images/' //with img from source
                +this.characterArray[i][0]
                +'.jpg" value="'+i+'" />' //With a value of the index in array
        }
        $(".characters").html(charImgString+'<div id="report"></div>');
        $(".target").html("");
    }

    imgClickDefiner(input){
        if(!this.myCharacter){
            this.assignCharacterToPlayer(input);
        } else if(!this.target){
            this.assignCharacterToTarget(input);
            $("#report").text("");
        } else {
            alert("Your foe has already been chosen.")
        }
    }

    assignCharacterToPlayer(input){
        $("#"+input.id).remove();
        this.myCharacter = this.characterArray[input.attributes.value.value];
        this.updatePlayerHTML();
    }

    updatePlayerHTML(){
        var playerHTML = '<div><img src="assets/images/'+this.myCharacter[0]+'.jpg" />'
        playerHTML += '<h1>Player Health: '+this.myCharacter[1]+'</h1></div>';
        $(".header").html(playerHTML);
    }

    assignCharacterToTarget(input){
        $("#"+input.id).remove();
        this.target = this.characterArray[input.attributes.value.value];
        this.updateTargetHTML();
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

    fight(){
        this.round++;
        this.target[1] -= this.round * this.myCharacter[2];
        if(this.target[1]<=0){
            this.target="";
            this.victories++;
            this.checkForWin();
        } else {
            this.myCharacter[1] -= this.target[3];
            this.checkForLoss();
        }
    }

    fullUpdate(){
        this.updatePlayerHTML();
        this.updateTargetHTML();
    }

    checkForWin(){
        if(this.victories>=this.characterArray.length-1){
            alert("Victory! You are the greatest droid!");
            this.myCharacter="";
            startNewGame();
        } else {
            $("#report").text("Select Your Next Opponent");
            this.fullUpdate();
        }
    }

    checkForLoss(){
        if(this.myCharacter[1]<=0){
            alert("You have been defeated.")
            startNewGame();
        } else {
            this.fullUpdate();
            $("#report").text("You dealt "+this.round*this.myCharacter[2]+" damage! And you received "+this.target[3]+" damage!")
        }
    }
}

$(function(){
    startNewGame();
});

function startNewGame(){
    myGame = new Game;
    $(".charImg").on("click", function(){
        myGame.imgClickDefiner(event.target);
    })
}