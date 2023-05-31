//! DO NOT REMOVE ====================================
const prompt = require('prompt-sync')({ sigint: true });
//! ==================================================

const main = () => {

    class Character {
        constructor(name, maxHealth, currentHealth, power, item, inventory) {
            this.name = name;
            this.maxHealth = maxHealth;
            this.currentHealth = currentHealth;
            this.power = power;
            this.item = item;
            this.inventory = [];
        }

        isAlive() {
            if (this.currentHealth > 0) {
                return true;
            }
        }

        healthStatus() {
            console.log(`${this.name} has ${this.currentHealth} health.`);
        }

        charAttack(opponent) {
            opponent.currentHealth -= this.power;
            console.log(`${this.name} deals ${this.power} damage to ${opponent.name}.`);
            if (opponent.currentHealth <= 0) {
                console.log(`${opponent.name} is defeated!`);
            }
        }

        displayInventory() {
            console.log(`${this.name} has the following in their inventory: `);
            for (const item of this.inventory) {
                console.log(item.name);
            }
        }
    }

    class Tank extends Character {
        constructor(name, maxHealth, currentHealth, power, inventory) {
            super(name, maxHealth, currentHealth, power, inventory)
        }
    }

    class DPS extends Character {
        constructor(name, maxHealth, currentHealth, power, inventory) {
            super(name, maxHealth, currentHealth, power, inventory)
        }
    }

    class Healer extends Character {
        constructor(name, maxHealth, currentHealth, power, inventory, heal) {
            super(name, maxHealth, currentHealth, power, inventory)
            this.heal = heal;
        }

        castHeal(target) {
            if (target.currentHealth < target.maxHealth) {
                target.currentHealth += this.heal;
            }
            console.log(`${this.name} heals ${this.heal} damage to ${target.name}.`);
        }
    }

    class Troll extends Character {
        constructor(name, maxHealth, currentHealth, power) {
            super(name, maxHealth, currentHealth, power)
        }

        trollAttack(opponent) {
            opponent.currentHealth -= this.power
            console.log(`${this.name} deals ${this.power} damage to ${opponent.name}.`)
            if (opponent.currentHealth <= 0) {
                console.log(`${opponent.name} is defeated!`)
            }
        }
    }

    class Item {
        constructor(itemName) {
            this.itemName = itemName;
        }

        useItem(item, target) {
            let itemChoices = [potionHeal, elixirRes, shortsword]
            if (this.item = itemChoices[0]) { // Potion of Healing - +2 to current health
                target.currentHealth += 2
            }
            if (this.item = itemChoices[1]) { // Elixir of Resurrection - "dead" player gets current health = 2
                target.currentHealth === 2
            }
            if (this.item = itemChoices[2]) { // Shortsword of Chance - 20% chance to deal double damage to target
                let chance = Math.floor(Math.random() * 5)
                if (chance == 1) {
                    target.currentHealth -= (this.power * 2)
                    console.log(`SMAAAAAAAAASH!!! You deal DOUBLE damage to ${this.target}!`);
                }
                if (opponent.currentHealth <= 0) {
                    console.log(`${opponent.name} is defeated!`);
                }
            }
        }
    }

    let chestItems = [
        { number: 1, name: 'Potion of Healing' },
        { number: 2, name: 'Elixir of Resurrection' },
        { number: 3, name: 'Shortsword of Chance' }
    ]

    //* CHARACTER / ITEM CREATION ==============================
    let Tawny = new Tank('Tawny', 30, 30, 8, [])
    let Antimonium = new DPS('Antimonium', 20, 20, 6, [])
    let Fuzz = new DPS('Fuzz', 20, 20, 6, [])
    let Supersedeas = new Healer('Supersedeas', 15, 15, 3, [], 3)
    let troll1 = new Troll('Brian', 50, 50, 6)
    let troll2 = new Troll('Bryan', 65, 65, 8)
    // let potionHeal = new Item('Potion of Healing')
    // let elixirRes = new Item('Elixir of Resurrection')
    // let shortsword = new Item('Shortsword of Chance')
    //* ========================================================

    console.log(`You awaken in an unfamiliar place, your head ringing - this place is dank and dimly lit - where ARE you ? `)
    console.log(`As your eyes begin to adjust to the darkness, you begin to think that you are in some kind of corridor.A catacomb, perhaps ? `);
    console.log(``);
    console.log(`"You ok there, Tawny?" With a start, you realize you are not alone!  But in the same moment, you find to your immense relief`);
    console.log(`that your travel companions are here with you: Antimonium, Supersedeas, and Fuzz.`);
    console.log(``);
    console.log(`Supersedeas speaks again: "Tawny?  Get it together friend, we don't know where we are but there are some sounds down the hall`);
    console.log(`that are making us mighty uncomfortable.  Kind of a weird snorting noise every few seconds."`);
    console.log(``);
    console.log(`You try to shrug off the mental haze and gather your wits.  Despite whatever events have befallen your crew, you find that`);
    console.log(`luckily, you are still equipped with your trusty longsword.  Similarly, your friends each have their weapons of choice:`);
    console.log(`Antimonium, quick and nimble, has her rapier;`);
    console.log(`Fuzz, who prefers to strike from a distance, is holding his crossbow and wearing a quiver of arrows across his back;`);
    console.log(`And Supersedeas is carrying his quarterstaff, prepared to boost the party's health.`);
    console.log(``);
    console.log(`You stand and say, "Ok, I'm ready - no idea what for, but I guess we should try to find our way out of here,`);
    console.log(`since it's clear we're not getting back out the way we came in.`);
    console.log(``);
    console.log(`Your party turns to leave and you hear a maniacal laugh that seems to come from all around, filling your head with dread.`);
    console.log(`"What the HELL was that!?" exclaims Fuzz.  Antimonium responds, "we have GOT to get the hell OUT of this godforsaken place."`);
    console.log(``);
    console.log(`You draw your longsword. "Alright, let's do this." The room you woke up in only has one exit, into a dark hallway.  Your companions follow`);
    console.log(`you, also holding their weapons at the ready.  You have fought together many times before, but never in an unknown setting like this one.`);
    console.log(`The confident swagger you are accustomedto has been replaced by an uneasy sense of doom.`);
    console.log(``);
    console.log(`After what seems like an eternity, you realize the hallway is quickly widening until you find yourself in an expansive cavern.`);
    console.log(`Unlike the hallway you came from, the cavern is well-lit by an aperture at the top of the high ceiling.  Your eyes are drawn upwards,`);
    console.log(`hopeful that there might be some means of escape through the opening - but where to, even if you could get to it?`);
    console.log(`"Uhhhh... guys?"  You turn to see Anti pointing at a massive boulder in the middle of the room.  After you observe for a few seconds,`);
    console.log(`you realize that this boulder is snoring loudly and beginning to stir.  "I think we're going to have to deal with that troll before we can go any further."`);
    console.log(``);
    console.log(`Brian the Cavern Troll rises and turns to face you, stretching up with a mighty yawning roar.  Your companions look at you expectantly.  What do you want to do?`);
    console.log(`1:  Attack Brian`);
    console.log(`2.  Do nothing`);
    console.log(`3:  Have Supersedeas heal another player`);
    console.log(`4.  Check party stats`);
    console.log(`5:  Quit game`);

    let rawInput = Number(prompt("Your companions will echo your actions.  Enter the number that corresponds with the action you want to take: "))


    while (Tawny.isAlive() && troll1.isAlive()) {

        if (rawInput == "1") { // attack
            Tawny.charAttack(troll1)
            Antimonium.charAttack(troll1)
            Fuzz.charAttack(troll1)
            Supersedeas.charAttack(troll1)
            troll1.healthStatus()
            console.log(``);
            if (troll1.isAlive()) {
                let possibleOpponent = [Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Supersedeas, Antimonium, Fuzz]
                troll1.charAttack(possibleOpponent[Math.floor(Math.random() * (possibleOpponent.length - 1))])
                rawInput = Number(prompt("Enter the number that corresponds with the action you want to take: "))
            }
            if (troll1.currentHealth <= 0) {
                continue;
            }
        }
        else if (rawInput == "2") { // do nothing - troll attacks
            console.log(`The troll senses your hesitation and takes a swipe at you with its club!`);
            let possibleOpponent = [Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Supersedeas, Antimonium, Fuzz]
            troll1.charAttack(possibleOpponent[Math.floor(Math.random() * (possibleOpponent.length - 1))])
            rawInput = Number(prompt("Enter the number that corresponds with the action you want to take: "))
        }
        else if (rawInput == "3") { // heal
            let whoHeal = [Tawny, Supersedeas, Antimonium, Fuzz]
            let choice = Number(prompt("Which character do you want to heal? 1 - Tawny / 2 - Supersedeas / 3 - Antimonium / 4 - Fuzz "))
            Supersedeas.castHeal(whoHeal[choice - 1])
            rawInput = Number(prompt("Enter the number that corresponds with the action you want to take: "))
        }
        else if (rawInput == "4") { // check stats
            Tawny.healthStatus()
            Antimonium.healthStatus()
            Fuzz.healthStatus()
            Supersedeas.healthStatus()
            rawInput = Number(prompt("Enter the number that corresponds with the action you want to take: "))
            // break;  //break out of loop
        }
        else if (rawInput == "5") { // quit game
            console.log("Bye Felicia.")
            break;  //break out of loop
        }
        else if (rawInput <= 0 || rawInput >= 6) {
            console.log(`Invalid input ${rawInput}`);
            rawInput = Number(prompt("Enter the number that corresponds with the action you want to take: "))
        }
        else {
            if (Tawny.currentHealth <= 0) {
                console.log("GAME OVER");
                break;
            }
        }
    }

    console.log(`Brian has been defeated!  His body slowly dissipates, like a cloud dispersing - was the troll even real?`);
    console.log(`You hear the same maniacal laugh from the beginning of the dungeon, but this time the voice also speaks:`);
    console.log(`"You have defeated my troll!  I want to keep the fun game going, so here are a few items you may find useful."`);
    console.log(``);
    console.log(`Where the troll once was, there now sits a small, battered, wooden chest. Upon opening the chest, you find the following items inside:`)
    console.log(``);
    console.log(`Potion of Healing - restores the user to full health`);
    console.log(`Elixir of Resurrection - brings a character back to life at 2 health`);
    console.log(`Shortsword of Chance - when equipped, the user has a 20% chance of double damage during attacks`);
    console.log(``);
      
    let count = 0;
    while (count < 3) {
        let chestItems = [
            { number: 1, name: 'Potion of Healing' },
            { number: 2, name: 'Elixir of Resurrection' },
            { number: 3, name: 'Shortsword of Chance' }
        ]
        let whoItem = [Tawny, Supersedeas, Antimonium, Fuzz]
        let choice1 = Number(prompt("Which character do you want to receive the Potion of Healing? 1 - Tawny / 2 - Supersedeas / 3 - Antimonium / 4 - Fuzz "))
        whoItem[choice1 - 1].inventory.push(chestItems[0])
        count++;
        let choice2 = Number(prompt("Which character do you want to receive the Elixir of Resurrection? 1 - Tawny / 2 - Supersedeas / 3 - Antimonium / 4 - Fuzz "))
        whoItem[choice2 - 1].inventory.push(chestItems[1])
        count++;
        let choice3 = Number(prompt("Which character do you want to receive the Sword of Chance? 1 - Tawny / 2 - Supersedeas / 3 - Antimonium / 4 - Fuzz "))
        whoItem[choice3 - 1].inventory.push(chestItems[2])
        count++
        for (const character of whoItem) {
            character.displayInventory();
          }
        continue;
    }

    console.log(``);
    console.log(`The gamewriter got tired, so... guess what?  You get to fight another troll!  But this one is even bigger and badder than the last!`);
    console.log(`Bryan the Other Cave Troll looks at you and rolls his eyes.  Laughing, he says, "you can't be serious right now.  Good luck, squibs."`);
    console.log(``);
    console.log(`1:  Attack Bryan`);
    console.log(`2.  Do nothing`);
    console.log(`3:  Have Supersedeas heal another player`);
    console.log(`4:  Use an item`);
    console.log(`5.  Check party stats`);
    console.log(`6:  Quit game`);

    let rawInput2 = Number(prompt("Your companions will echo your actions.  Enter the number that corresponds with the action you want to take: "))
    while (Tawny.isAlive() && troll2.isAlive()) {
        if (rawInput2 == "1") { // attack
            Tawny.charAttack(troll2)
            Antimonium.charAttack(troll2)
            Fuzz.charAttack(troll2)
            Supersedeas.charAttack(troll2)
            troll2.healthStatus()
            console.log(``);
            if (troll2.isAlive()) {
                let possibleOpponent = [Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Supersedeas, Antimonium, Fuzz]
                troll2.charAttack(possibleOpponent[Math.floor(Math.random() * (possibleOpponent.length - 1))])
                rawInput2 = Number(prompt("Enter the number that corresponds with the action you want to take: "))
            }
            else if (troll2.currentHealth <= 0) {
                console.log(`"You have beaten my double-troll puzzle!  The end :)"`);
                continue;
            }
            else if (Tawny.currentHealth <= 0) {
                console.log("GAME OVER");
                break;
            }
        }
        else if (rawInput2 == 2) { // do nothing - troll attacks
            console.log(`The troll senses your hesitation and takes a swipe at you with its club!`);
            let possibleOpponent = [Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Tawny, Supersedeas, Antimonium, Fuzz]
            troll2.charAttack(possibleOpponent[Math.floor(Math.random() * (possibleOpponent.length - 1))])
            rawInput2 = Number(prompt("Enter the number that corresponds with the action you want to take: "))
        }
        else if (rawInput2 == 3) { // heal
            let whoHeal = [Tawny, Supersedeas, Antimonium, Fuzz]
            let choice = Number(prompt("Which character do you want to heal? 1 - Tawny / 2 - Supersedeas / 3 - Antimonium / 4 - Fuzz "))
            Supersedeas.castHeal(whoHeal[choice - 1])
            rawInput2 = Number(prompt("Enter the number that corresponds with the action you want to take: "))
        }
        else if (rawInput2 == 4) { // use item
            Tawny.displayInventory();
            Supersedeas.displayInventory();
            Antimonium.displayInventory();
            Fuzz.displayInventory();
            let whoseInventory = [Tawny, Supersedeas, Antimonium, Fuzz]
            let itemChoice = Number(prompt("Which item do you want to use? 1 - Potion of Healing / 2 - Elixir of Resurrection / 3 - Shortsword of Chance "))
            for (let i = 0; i < whoseInventory.length; i++) { // search for item and then remove
                if (whoseInventory[i] === (itemOptions[itemChoice - 1])) {
                    whoseInventory[i].splice(0, 1)
                }
                console.log(whoseInventory[i].displayInventory());
            }
            let targetOptions = [Tawny, Supersedeas, Antimonium, Fuzz, troll2]
            let targetChoice = Number(prompt("Who do you want to use the item on? 1 - Tawny / 2 - Supersedeas / 3 - Antimonium / 4 - Fuzz / 5 - Bryan"))
            whoseInventory[i].useItem(itemOptions[itemChoice - 1], targetOptions[targetChoice - 1])
        }
        else if (rawInput2 == 5) { // check stats
            Tawny.healthStatus()
            Antimonium.healthStatus()
            Fuzz.healthStatus()
            Supersedeas.healthStatus()
            rawInput2 = Number(prompt("Enter the number that corresponds with the action you want to take: "))
        }
        else if (rawInput2 == 6) { // quit game
            console.log("Bye Felicia.")
            break;
        }
        else if (rawInput2 <= 0 || rawInput >= 6) {
            console.log(`Invalid input ${rawInput}`);
            rawInput2 = Number(prompt("Enter the number that corresponds with the action you want to take: "))
        }
        else {
            if (Tawny.currentHealth <= 0) {
                console.log("GAME OVER");
                break;
            }
        }
    }
}



main()
//* ========================================

