import { Character } from "./character.ts";

export class Mage extends Character {
  override attack(opponent: Character): void {
    const damage = 25;
    console.log(`${this.name}は魔法を唱えた！`);
    opponent.takeDamage(damage);
  }
}
