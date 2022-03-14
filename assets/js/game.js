var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        //aske player if they's like to fight or run
        var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        // if player choses to "skip" confirm and then stop the loop
        if(promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            
            // if yes (true), leave fight
            if(confirmSkip) {
                window.alert(playerName + " has decided to skip the fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = Math.max(0, playerMoney -10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable    enemyHealth = enemyHealth - playerAttack
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack)
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Check enemy's health
        if(enemyHealth <=0) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left!");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        var damage = randomNumber(enemyAttack - 3, enemyAttack)

        playerHealth = Math.max(0, playerHealth - damage)
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health
        if(playerHealth<=0) {
            window.alert(playerName + "has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert (playerName + " still has " + playerHealth + " health left!");
        }
    } // end of while loop
}; // end of function

// fight each enemy-robot by looping over them and fighting them once at a time
var startGame = function() {
    // reset play stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // fight each enemy robot by looping over them and fighting them one at a time
    for(var i = 0; i <enemyNames.length; i++) {
        // if player is still alive, keep fighting
        if (playerHealth >0) {
            // let player know what round they are in
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
        
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            enemyHealth = randomNumber(40, 60);

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
            // if a player is still alive and we are not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length -1) {
                // ask player if they want to use the store before the next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store function
                if (storeConfirm) {
                    shop();
                }
            }
        } 
        // if player isn't alive, stop the game
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!")
    
    // if player is still alive
    if (playerHealth >0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " ." );
    }
    else {
        window.alert("You lost your robot in battle.");
    }

    // Ask the player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    
    if(playAgainConfirm) {

        startGame();
    }else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    // ask the player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    
    // Use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney > 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            // increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney -7;
            }
            else {
                window.alert("You do not have enough money!")
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney > 7 ){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            // increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You do not have enough money")
            }
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.")

            // do nothing so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.")

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random()*(max - min +1)) +min;
    return value;
};

// start the game when the page loads
startGame();