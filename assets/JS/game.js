// function to produce random numbers
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value
}



// * Start fight funtion
var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit? That'll cost you 1000¥/" + playerInfo.money + "¥.");
        
        // if yes (true), leave fight
        if (confirmSkip) {
          // subtract money from playerInfo.money for skipping
          playerInfo.money = Math.max(0, playerInfo.money - 1000);
          window.alert(playerInfo.name + ' has decided to skip this fight. You have ' + playerInfo.money + '¥ left.');
          console.log("playerInfo.money", playerInfo.money)
          break;
        }
      }
      else if (promptFight === 'fight' || promptFight === 'FIGHT' || promptFight === 'Fight') {
        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
      
      // check enemy's health
      if (enemy.health <= 0) {
        // award player money for winning
        playerInfo.money = playerInfo.money + 500;
        window.alert(enemy.name + ' has died! 💀. You won 500¥!');
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
      
      // remove players's health by subtracting the amount set in the enemy.attack variable
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
      
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died! 💀');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
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
  // reset player stats
  playerInfo.reset();
  playerInfo.name = window.prompt("Please enter your challenger's name")
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert('Welcome to roboGladiators! Round ' + (i + 1));
      //queue next fighter from enemy Names array
      var pickedEnemyObj = enemyInfo[i];
      // reset enemy health
      pickedEnemyObj.health = randomNumber(40, 60);
      // call fight function with enemy robots
      fight(pickedEnemyObj);
      // if defeated enymy is not last, then open shop
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask player if they'd like to shop
        var storeConfirm = window.confirm('Would you like to paruse the shop before the next round?')
        // if yes, then call shop function
        if (storeConfirm){
          shop();
        }
      };
    }
  }
    endGame()
  }; 
  // *end start game function
  
  // *end game function
  var endGame = function() {
    // if challenger is still alive at the end, they win
    if (playerInfo.health > 0) {
      window.alert("We have a new world Chapion! Give it up for Champion " + playerInfo.name + "!");
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
  var shopOptionPrompt = window.prompt('Would you like to: REFILL your health (500¥); UPGRADE your attack (1200¥); LEAVE the shop. You have ' + playerInfo.money + '¥')
  switch (shopOptionPrompt) {
    
    // increasing player Health
    case 'Refill':
    case 'refill':
    case 'REFILL':
      if (playerInfo.money >= 500) {
        var refillConfirm = window.confirm("Do you want to refill your challenger's health by 20hp for 500¥?")
        switch (refillConfirm) {
          case true:
            playerInfo.refillHealth()
            window.alert("Challenger health is now at " + playerInfo.health + "hp! You have " + playerInfo.money + "¥ left.")
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
          if (playerInfo.money >= 1200) {
            var upgradeConfirm = window.confirm("Do you want to increase your challenger's attack by 6dmg for 1200¥?")
          switch (upgradeConfirm) {
            case true:
              playerInfo.upgradeAttack()
              window.alert("Challenger attack now does " + playerInfo.attack + "dmg! You have " + playerInfo.money + "¥ left.")
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

// Player
  var playerInfo = {
    name: 'default',
    health: 100,
    attack: 10,
    money: 2000,

    // reset stats after each game
    reset: function(){
      this.health = 100;
      this.money = 2000;
      this.attack = 10;
    },

    // store items
    refillHealth: function () {
      this.health += 20;
      this.money -= 500;
    },
    upgradeAttack: function() {
      this.attack += 6;
      this.money -= 1200;
    },
  };
  if (playerInfo.health > 0) { //check if playerInfo.health is <= 0
      console.log('Challenger is good to go!');
  }
    
// enemy robot
    var enemyInfo = [
      {
        name: 'Roborto',
        attack: randomNumber(10, 14)
      },
      {
        name: 'Robot Rich Evans',
        attack: randomNumber(10, 14)
      },
      {
        name: 'CybaFyta',
        attack: randomNumber(10, 14)
      }
    ];

startGame()
