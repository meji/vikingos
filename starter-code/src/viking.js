// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health - damage; 
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`; 
        }else{
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!"; 
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    attack(){
        return this.strength; 
    }
    receiveDamage(damage){
        this.health = this.health - damage; 
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`; 
        }else{
            return `A Saxon has died in combat`;
        }
    }
}
// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = []; 
    }
    addViking(viking){
        this.vikingArmy.push(viking); 
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon); 
    }
    attack(army1, army2){ //Uno los dos ataques en uno para refactorizar
        let race1Selected = army1[Math.floor(Math.random() * army1.length)];
        let race2Selected = army2[Math.floor(Math.random() * army2.length)];
        let result = race2Selected.receiveDamage(race1Selected.strength);
        if (race2Selected.health <= 0){
            army2.shift(race2Selected); 
        }        
        return result;    
    }
    vikingAttack(){
        return this.attack(this.vikingArmy, this.saxonArmy); 
        //Código antiguo:
        // let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        // let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        // let result = saxon.receiveDamage(viking.strength);
        // if (saxon.health <= 0){
        //     this.saxonArmy.shift(saxon); 
        // }        
        // return result;    
    }
    saxonAttack(){
        return this.attack(this.saxonArmy, this.vikingArmy); 
        //Código antiguo:
        // let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        // let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        // let result = viking.receiveDamage(saxon.strength);
        // if (viking.health <= 0){
        //     this.vikingArmy.shift(viking); 
        // }        
        // return result;    
    }
    showStatus(){
        if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }else if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }else{
            return "Vikings and Saxons are still in the thick of battle."; 
        }
    }
}