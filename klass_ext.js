class Hero {
    constructor(name = 'hero', xp = 0) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        this.xp += amount;
        console.log(`${this.name} add ${amount} experience`)
    }
}

class Warrior extends Hero {
    constructor(name, xp, weapon) {
        super(name, xp);
        console.log("config", name, xp);
        this.weapon = weapon;
}   
}

const mango = new Warrior('mango', 1000, 'alebarda');
console.log("mango", mango)

mango.gainXp(1000);

console.log(mango.__proto__)
