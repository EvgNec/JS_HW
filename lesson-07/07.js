const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions(...potions) {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      console.log(potion.name, newPotion.name);
      if (potion.name == newPotion.name) {
            console.log(potion.name, newPotion.name);
      return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
    if (potion.name == potionName) {      
      return this.potions.splice(this.potions.indexOf(potion), 1); 
    }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
    if (potion.name == oldName) {      
      potion.name = newName;
    }
    }
      return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};


// console.log(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: "Speed potion", price: 620 })
console.log(atTheOldToad.getPotions());
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
// console.log(atTheOldToad.getPotions());