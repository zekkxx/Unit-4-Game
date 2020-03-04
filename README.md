# Basic Game
A new game project designed with utilization of jQuery.

## Explanation:
This game is a very basic version of a Star Wars themed adventure game. The intention behind this game was simply to manipulate elements by utilizing jQuery. As such, the primary challenge from this game was to balance each character type so that each character was viable to win the game with.

## Playing the game:
* Load up the browser and select one of the droids displayed on the screen to play.
* Selecting another droid to fight and attack until either your or your enemy is defeated.
* Continue until either you have been defeated, or all enemies have been destroyed.

## Design Notes:
All characters are actually viable in this game. The mechanics work such that each droid has an inherent HP, Player Attack, and AI Attack value. Each round the Player Attack value will grow by it's base amount, but the AI Attack value will remain the same. As such, the tradeoff between the three droids is as such:

`this.characterArray = [["C3PO", 50, 1, 4], ["R2D2", 25, 3, 4], ["BB8", 15, 5, 10]];`

This way, the balancing only needs to really take place on the idea of how many turns it should take to complete the game if properly run through. You can see the logic I wrote to ensure that this was viable for each character in `swRPG1.js`. This was thrown together quickly and without care for efficiency, but it worked really well.

In the main program, the most important part of the application comes in the manner in which that same character array plays a part in every aspect of the game. When choosing a character or an opponent, the chosen character will be spliced out of the array, which allows us to use the characterArray as the check condition for victory and an end to the game.

    imgClickDefiner(input){
        if(!this.myCharacter){
            this.assignCharacterToPlayer(input);
            this.characterArray.splice(input.id, 1);
---------------------------------------------------------
    checkForWin(){
        if(0 >= this.characterArray.length){

Future Iterations:
Further work could be done to remove the reliance upon the alert system which is relatively jarring even at the best of times.
Additionally, it would be worthwhile to add either a sidebar to indicate rules, OR some button to open up a modal for the rules.
As for the game itself, it's flawed in a great many aspects many of which were within the specs designed for it. To put it bluntly, this game will not be expanded on.