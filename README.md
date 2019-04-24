# Unit-4-Game
A new game project designed for utilization of jQuery.

2-Options:
Crystal Collector Game: https://youtu.be/yNI0l2FMeCk
4 Crystals - each has randomly assigned value (assigned at beginning of game)
  Value between 1 and 12
The Goal is to reach the specified number randomly generated at the beginning of the game
  Value between 19-120
This game should show a win/lose ratio indicitave of total rounds played.

"Star Wars" RPG Game: https://youtu.be/klN2-ITjRt8
At Game Start - Player chooses a fighter, all other fighters become enemy combatants
  Player selects an opponent who is moved to a "defender area"
  Player "attacks" and enemy counter attacks dealing damage to each targets HP
  Characters have - HP, Atk, and Counter Atk
    Character uses Atk value which multiplies by turn #
      That value is retained between combats
    Enemy uses Counter Atk which never changes
   ALL CHARACTERS SHOULD BE VIABLE (balancing act) and capable of losing
   
# Analysis
Crystal Collector game is all based on randomization and experimentation. If the buttons are all closer to 12 and the value is closer to 19 the game will be nearly impossible. As such, it might be an interesting challenge to make sure that there IS a solution to EVERY challenge that comes along.

Star Wars RPG game will be more of a balancing act. With health being a limited resource the important point is to find the person with the lowest Counter-Attack, and striking at them first. This is going to take more time in my opinion to make suitable fighters and balance them than to actually program.
