# Object-Oriented Programming Example - Role Playing Game

## About the Project:
This project is an example of object-oriented programming, in which we developed a role playing game (RPG).  The requirements for the game were that we had to have a hero, an opponent, and a store with items that the hero could buy. I decided to expand on this a bit, taking some inspiration from my favorite massive multiplayer online RPG: Final Fantasy XIV. In my game, there are four "heroes", each of which plays a different role in their party. Each character has the following attributes: maxHealth (no matter how many times a character is healed, they will never exceed their maxHealth), currentHealth (updates continually as characters take damage and are healed), and power (how much damage they deal in an attack).

- Tawny, the Tank: the user plays the game as Tawny. Tawny has the highest maxHealth and power, and also has a higher probability of being hit by the opponent than the other players do.
- Supersedeas, the Healer: this character has the lowest maxHealth and damage, but they are the only character capable of increasing the currentHealth of the team.
- Fuzz and Antimonium, the DPS (damage per second, not really relevant here but I'm not sure how else to refer to them!): these two characters exist solely to help Tawny take down the opponent.
- Brian, the Cave Troll: Brian's maxHealth and damage are much higher than any of the characters, which is why they must work together to take him down.
- Bryan, the bigger Cave Troll: after Brian is defeated, the players are able to pick up items to help them be better-equipped to fight Bryan, who is even beefier than Brian.

Lastly, in lieu of a store, I decided to have a chest drop after Brian is defeated. The user can have each character pick up one of three items:

- Shortsword of Chance: grants the character a 20% chance to deal double damage to the opponent
- Potion of Healing: increases a character's currentHealth by 2 points
- Elixir of Resurrection: when used on a player whose currentHealth is <=0, the player is restored to currentHealth of 2

## Built With:
- JavaScript
