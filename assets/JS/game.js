// Player
    var playerName = "default";
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
    
    // * Start fight funtion
    var fight = function(enemyName) {
        while (playerHealth > 0 && enemyHealth > 0) {
          // ask player if they'd like to fight or run
          var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
      
          // if player picks "skip" confirm and then stop the loop
          if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit? That'll cost you 1000¥/" + playerYen + "¥.");
      
            // if yes (true), leave fight
            if (confirmSkip) {
              // subtract money from playerYen for skipping
              playerYen = playerYen - 1000;
              window.alert(playerName + ' has decided to skip this fight. You have ' + playerYen + '¥ left.');
              console.log("playerYen", playerYen)
              break;
            }
          }
          else if (promptFight === 'fight' || promptFight === 'FIGHT' || promptFight === 'Fight') {
          // remove enemy's health by subtracting the amount set in the playerAttack variable
          enemyHealth = enemyHealth - playerAttack;
          console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
          );
      
          // check enemy's health
          if (enemyHealth <= 0) {
            // award player money for winning
            playerYen = playerYen + 500;
            window.alert(enemyName + ' has died! 💀. You won 500¥!');
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
        }
        else if (promptFight === '/quit') {
          console.log('forced quit');
          break;
        }
        else {
          window.alert('Please enter either FIGHT or SKIP')
        }
        } // end of while loop
    }; //* end of fight function    


// *funtion to start  game
var startGame = function() {
  debugger;
  // reset player health
  playerHealth = 100
  playerAttack = 10
  playerYen = 2000
  playerName = window.prompt("Please enter your challenger's name")
  for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
          window.alert('Welcome to roboGladiators! Round ' + (i + 1));
          //queue next fighter from enemy Names array
          var pickedEnemyName = enemyNames[i];
          // reset enemy health
          enemyHealth = 50;
          // call fight function with enemy robots
          fight(enemyNames[i]);
          // if defeated enymy is not last, then open shop
          if (playerHealth > 0 && i < enemyNames.length - 1) {
            // ask player if they'd like to shop
            var storeConfirm = window.confirm('Would you like to paruse the shop before the next round?')
            // if yes, then call shop function
            if (storeConfirm){
              shop();
            }
          };
      }
      else if(playerHealth <= 0) {
          window.alert('You have lost your robot in battle: GAME OVER!');
          break;
      }
  }
  endGame()
}; 
// *end start game function

// *end game function
var endGame = function() {
  // if challenger is still alive at the end, they win
  if (playerHealth > 0) {
    window.alert("We have a new world Chapion! Give it up for Champion " + playerName + "!");
  }
  else {
    window.alert("Your challenger has been destroyed: GAME OVER!")
  }
  // play again confirm
  var playAgain = window.confirm("Would you like to play again?")
  switch (playAgain) {
    case true:
      startGame()
      break;
  
    default:
      window.alert('Thanks for Playing! Goodbye.')
      break;
  }
};
// *end end game function

// * start shop function
var shop = function() {
  var shopOptionPrompt = window.prompt('Would you like to: REFILL your health (500¥); UPGRADE your attack (1200¥); LEAVE the shop. You have ' + playerYen + '¥')
  switch (shopOptionPrompt) {

    // increasing player Health
    case 'Refill':
    case 'refill':
    case 'REFILL':
      if (playerYen >= 500) {
      var refillConfirm = window.confirm("Do you want to refill your challenger's health by 20hp for 500¥?")
      switch (refillConfirm) {
        case true:
          playerHealth = playerHealth + 20
          playerYen = playerYen - 500
          window.alert("Challenger health is now at " + playerHealth + "hp! You have " + playerYen + "¥ left.")
          break;
      
        default:
          shop()
          break;
      }
      }
      // if player doesn't have enough yen
      else {
        window.alert("Sorry, you don't have enough cash for that.")
      }
      break;
      
      // increasing player attack
      case 'Upgrade':
      case 'upgrade':
      case 'UPGRADE':
        if (playerYen >= 1200) {
          var upgradeConfirm = window.confirm("Do you want to increase your challenger's attack by 6dmg for 1200¥?")
          switch (upgradeConfirm) {
            case true:
              playerAttack = playerAttack + 6
              playerYen = playerYen - 1200
              window.alert("Challenger attack now does " + playerAttack + "dmg! You have " + playerYen + "¥ left.")
              break;
          
            default:
              break;
          }
        }
        // if player doesn't have enough yen
        else {
          window.alert("Sorry, you don't have enough cash for that")
        }
        break;
      
      // player leaves with out buying anything
      case 'Leave':
      case 'leave':
      case 'LEAVE':
        window.alert('You leave the shop. Best of luck!') 
        break;

      default:
        window.alert("You did not pick a valid option")
        break;
  }
};
// * end shop function


startGame()
