// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => {
    return this.strength;
  };
  receiveDamage = (damage) => {
    this.health = this.health - damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor( name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage = (damage) => {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  battleCry = () => {
    return `Odin Owns You All!`;
  };
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super (health, strength);
  }
  receiveDamage = (damage) => {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking = (viking) => {
    this.vikingArmy.push(viking);
    //console.log("Vik Army: ", this.vikingArmy)
  };

  addSaxon = (saxon) => {
    this.saxonArmy.push(saxon);
    //console.log("Sax Army: ", this.saxonArmy)

  };

  vikingAttack = () => {
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let toReturn = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

        if (this.saxonArmy[randomSaxon].health <= 0) {
          this.saxonArmy.splice(randomSaxon, 1);
        }
  

    return toReturn
  };

  saxonAttack = () => {
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let toReturn = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return toReturn
  };

  showStatus = () => {
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!"
    }else if (this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survived another day..."
    }else {
        return "Vikings and Saxons are still in the thick of battle."
    }
  }
}


let vik1 = new Viking("Eric", 100, 50)
let sax1 = new Saxon(50,10)

let vik2 = new Viking("Gunther", 100, 50)
let sax2 = new Saxon(50,10)

let war1 =new War()

war1.addViking(vik1)
war1.addSaxon(sax1)
war1.addViking(vik2)
war1.addSaxon(sax2)

console.log(war1)

console.log(war1.vikingAttack())

console.log(war1)



