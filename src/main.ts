import { Warrior } from "./warrior";
import { Enemy } from "./enemy";

function main(): void {
  const warrior = new Warrior("アーサー", 100, "エクスカリバー");

  const enemy = new Enemy("ゴブリン", 100);

  // どちらかが倒れるまで繰り返す
  while (!warrior.isDead() && !enemy.isDead()) {
    // 勇者の攻撃
    warrior.attack(enemy);

    // 敵が倒れたら終了
    if (enemy.isDead()) {
      break;
    }

    // 敵の攻撃
    enemy.attack(warrior);

    // 毎ターンHPを表示
    warrior.showStatus();
    enemy.showStatus();
  }

  // 勝敗表示
  if (warrior.isDead()) {
    console.log("ゴブリンの勝ち！");
  } else {
    console.log("アーサーの勝ち！");
  }
}

main();
