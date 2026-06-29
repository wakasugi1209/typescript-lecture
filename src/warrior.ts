import { Character } from "./character.ts";

export class Warrior extends Character {
  private weapon: string;

  constructor(name: string, hp: number, weapon: string) {
    super(name, hp); // super() <- 継承元 (character) の constructor
    this.weapon = weapon;
  }

  override attack(opponent: Character): void {
    const damage = 20;
    console.log(`${this.name}は${this.weapon}で攻撃した！`);
    //opponent の hp を減らす
    opponent.takeDamage(damage);
  }
}
