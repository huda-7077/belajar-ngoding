// SHOOTING GAME =====================================================================================================
// Specifications :
// Create a shooting game between two player
// ○ Each player has three properties : name, health and power
// ○ Each player will take turns to shooting
// ○ Before shooting, players get a chance to get random items (health +10 or power +10)
// ○ The game will continue until one of the players has health < 0
// Requirements :
// ○ Create ShootingGame & Player class
// ○ ShootingGame class :
//      ■ constructor(player1, player2) → player objects as a parameter
//      ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 } => {health : 0 , power : 10}
//      ■ start() → start shooting games
//   Player class :
//      ■ Property → name, health (default 100), power (default 10)
//      ■ damage(power) →  subtract player health
//      ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
//      ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
//   ShootingGame start() function flow :
//      ■ In every turn :
//          ● Show each player status before shooting
//          ● Get random item for each player before shooting
//          ● Show each player status after shooting
//      ■ Show winner name
class Player {
  name: string;
  health: number;
  power: number;
  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }
  damage(power: { power: number }) {
    this.health -= power.power;
    return { name: this.name, health: this.health, power: this.power };
  }
  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
    return { name: this.name, health: this.health, power: this.power };
  }
  showStatus() {
    return { name: this.name, health: this.health, power: this.power };
  }
}

class ShootingGame {
  player: string;
  player2: string;
  constructor(player1: string, player2: string) {
    this.player = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const choices: number[] = [0, 10];
    const power = choices[Math.floor(Math.random() * 1.9)];
    const health = choices[Math.floor(Math.random() * 1.9)];
    console.log(power);
    console.log(health);
    return { health, power };
  }
  start() {
    const player1 = new Player(this.player);
    const player2 = new Player(this.player2);
    console.log(player1.showStatus());
    console.log(player2.showStatus());
    console.log(player1.useItem(this.getRandomItem()));
    console.log(player2.useItem(this.getRandomItem()));
    while (player1.health >= 0 && player2.health >= 0) {
      // console.log(player1.health);
      player2.damage(player1);
      player1.damage(player2);
      if (player1.health <= 0 || player2.health <= 0) {
        console.log(player1.showStatus());
        console.log(player2.showStatus());

        break;
      }
    }

    if (player1.health === player2.health) {
      return {
        result: "DRAW",
        player1: player1.showStatus(),
        player2: player2.showStatus(),
      };
    } else if (player1.health > player2.health){
      return {
        result: "PLAYER 1 WIN",
        player1: player1.showStatus(),
        player2: player2.showStatus(),
      };
    } else if (player1.health < player2.health){
      return {
        result: "PLAYER 2 WIN",
        player1: player1.showStatus(),
        player2: player2.showStatus(),
      };
    }
  
  }
  
}
const game1 = new ShootingGame("huda", "hasan");
// console.log(huda.getRandomItem());
console.log(game1.start());

// const player = new Player("Luffy");
// const player2 = new Player("Jeki");

// console.log(player.showStatus());
// console.log(player.useItem(game1.getRandomItem()));
// console.log(player2.useItem(game1.getRandomItem()));
// console.log(player.damage(player2));

// console.log(player.showStatus());
