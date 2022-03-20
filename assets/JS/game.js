// Player
    var playerName = window.prompt("Enter Robot Contestant Name");
    var playerHealth = 100;
    if (playerHealth > 0) { //check if playerHealth is <= 0
        console.log('Your contestant is good to go!');
    }
    var playerAttack = 10;
    var playerYen = 2000;

// enemy robot
var enemyNames = ["Roborto", "Robot Rich Evans", "CybaFyta"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(enemyHealth > 0) {
        // fight of skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this round? FIGHT/SKIP:")
        window.alert("You have chosen to " + promptFight + "!")
    
        // player chooses FIGHT
        if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
            
            // ✔️ Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
            
            // ✔️ Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health left" 
                );
                
                // check enemyHealth
                if (enemyHealth <= 0){
                    window.alert(enemyName + " is fucking dead!💀")
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
                    window.alert("Challenger " + playerName + " has fucking died! I mean he's dead as fuck, holy shit!")
                }
                else {
                    window.alert("Challenger " + playerName + " has " + playerHealth + " health left")
                }
        // player chooses to SKIP
        } else if (promptFight === 'skip' || promptFight === 'SKIP' || promptFight === 'Skip') {
                var skipConfirm = window.confirm("Are you sure you want to fold? That'll cost you 200 yen. You have " + playerYen + " yen.")
    
                if(skipConfirm){
                    window.alert("You sit out this round.")
                    playerYen = playerYen - 200;
                    window.alert("You have " + playerYen + " yen left.")
                } else {
                    fight()
                    
                }
        // player can't type or follow directions
        } else {
            window.alert("Type it right, dumbass.")
        }
    }
    }
    

for (var i = 0; i < enemyNames.length; i++) {
    // debugger;
    // call fight function with enemy robots
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}
