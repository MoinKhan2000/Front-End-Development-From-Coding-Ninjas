//Do not alter the starter code
function main() {

    //Create Character constructor function
    function Character(health, strength, agility) {
        this.health = health;
        this.strength = strength;
        this.agility = agility
    }

    //Create Warrior ,Mage, Enemy and Archer constructor fntion inheriting Character
    function Warrior(health, strength, agility, weapontype) {
        Character.call(this, health, strength, agility)
        this.weapontype = weapontype
    }

    Warrior.prototype = Object.create(Character.prototype);
    Warrior.prototype.constructor = Warrior

    function Mage(health, strength, agility, spellType) {
        Character.call(this, health, strength, agility)
        this.spellType = spellType
    }
    Mage.prototype = Object.create(Character.prototype)
    Mage.prototype.constructor = Mage

    function Archer(health, strength, agility, arrowType) {
        Character.call(this, health, strength, agility)
        this.arrowType = arrowType
    }

    Archer.prototype = Object.create(Character.prototype)
    Archer.prototype.constructor = Archer;

    function Hero(health, strength, agility, weaponType, spellType, specialAbility) {
        Warrior.call(this, health, strength, agility, weaponType)
        Mage.call(this, health, strength, agility, spellType)
        this.specialAbility = specialAbility
    }

    Hero.prototype = Object.create(Warrior.prototype)
    Hero.prototype = Object.create(Mage.prototype)
    Hero.prototype.constructor = Hero

    //Create constructor function for Hero inheriting Hero and Mage
    function Enemy(health, strength, agility, enemyType) {
        Character.call(this, health, strength, agility);
        this.enemyType = enemyType;
    }
    Enemy.prototype = Object.create(Character.prototype);
    Enemy.prototype.constructor = Enemy;

    let warrior1 = new Warrior(100, 50, 30, "sword");
    let mage1 = new Mage(80, 20, 50, "fireball");
    let archer1 = new Archer(90, 40, 40, "poison");
    let hero1 = new Hero(120, 60, 40, "axe", "ice", "double damage");
    let enemy1 = new Enemy(200, 80, 20, "goblin");

    console.log(warrior1);
    console.log(mage1);
    console.log(archer1);
    console.log(hero1);
    console.log(enemy1);

    return { Character, Hero, Warrior, Mage, Archer, Enemy };
}

main()