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

//Include a reference from swRPG to finish this ReadMe
