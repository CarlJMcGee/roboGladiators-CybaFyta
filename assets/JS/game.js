// Player
var playerName = window.prompt("Enter Robot Contestant Name");

var playerHealth = 100;
// check if playerHealth is > 0
if (playerHealth > 0) {
    console.log('Your contestant is good to go!');
}

var playerAttack = 10;

// enemy robot
var enemyName = "CybaFyta";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // ✔️ alert player a round is starting
    window.alert("Welcome to RoboGladiators!");

    // ✔️ Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    
    // ✔️ Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health left" 
    );

    // check enemyHealth
    if (enemyHealth <= 0){
        window.alert(enemyName + " is fucking dead!💀 ")
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left")
    }

    // ✔️TODO Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // ✔️TODO Log a resulting message to the console so we know that it worked.};
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health left");

    // check playerHealth
    if (playerHealth <= 0){
        window.alert("Contestant " + playerName + " has fucking died! I mean he's dead as fuck, holy shit!")
    }
    else {
        window.alert("Contestant " + playerName + " has " + playerHealth + " health left")
    }

}

fight();