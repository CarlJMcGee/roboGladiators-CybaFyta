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
        while (playerHealth > 0 && enemyHealth > 0) {
          // ask player if they'd like to fight or run
          var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
      
          // if player picks "skip" confirm and then stop the loop
          if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
            // if yes (true), leave fight
            if (confirmSkip) {
              window.alert(playerName + ' has decided to skip this fight. Goodbye!');
              // subtract money from playerYen for skipping
              playerYen = playerYen - 10;
              console.log("playerYen", playerYen)
              break;
            }
          }
      
          // remove enemy's health by subtracting the amount set in the playerAttack variable
          enemyHealth = enemyHealth - playerAttack;
          console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
          );
      
          // check enemy's health
          if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died! 💀');
      
            // award player money for winning
            playerYen = playerYen + 20;
            // leave while() loop since enemy is dead
            break;
          } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
          }
      
          // remove players's health by subtracting the amount set in the enemyAttack variable
          playerHealth = playerHealth - enemyAttack;
          console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
          );
      
          // check player's health
          if (playerHealth <= 0) {
            window.alert(playerName + ' has died! 💀');
            // leave while() loop if player is dead
            break;
          } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
          }
        } // end of while loop
      }; // end of fight function    

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0){
        window.alert('Welcome to roboGladiators! Round ' + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        // call fight function with enemy robots
        fight(enemyNames[i]);
    }
    else if (playerHealth <= 0); {
        window.alert('You have lost your robot in battle: GAME OVER!')
        break;
    }
}
