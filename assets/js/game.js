//var playerName 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple vlaues at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemies
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player's robot health is zero or less

// fight function
var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Prompt player to fight or skip
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //If player choses to fight then fight
    if(promptFight === "fight" || promptFight ==="FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable    enemyHealth = enemyHealth - playerAttack
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Check enemy's health
        if(enemyHealth <=0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left!");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        // Check player's health
        if(playerHealth<=0) {
            window.alert(playerName + "has died!");
        } else {
            window.alert (playerName + " still has " + playerHealth + " health left!");
        }
         // if player choses to skip fight
    } else if(promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")
        
        // if yes (true), leave fight
        if(confirmSkip) {
            window.alert(playerName + " has decided to skip the fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney -2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
        // if player did not chose 1 ot 2 in promt
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};  

for(var i = 0; i <enemyNames.length; i++) {
    fight(enemyNames[i]);}


// run fight function to start game
// fight();