class Hero {
    constructor({name = 'hero', xp = 0} = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        this.xp += amount;
        console.log(`${this.name} add ${amount} experience`)
    }
}

class Warrior extends Hero {
        // constructor({ name, xp, weapon }) {
        // super({ name, xp });
    constructor({ weapon, ...restProps }={}) {
        super(restProps);
        this.weapon = weapon;
    }  
    attack(damage) {
        console.log(`${this.name} attack ${this.weapon} on ${damage}`)
        this.xp -= damage;
}    
}

const mango = new Warrior({name: 'mango', xp: 1000, weapon: 'alebarda'});
console.log("mango", mango)

mango.gainXp(1000);
mango.gainXp(1000);
mango.gainXp(1000);
mango.attack(550);
console.log("mango", mango)

