abstract class Character {
  calculateAttackDamage(): number {
    return this.getAttackDamage();
  }
  calculateMoveSpeed(): number {
    return this.getMoveSpeed();
  }
  protected abstract getAttackDamage: () => number;
  protected abstract getMoveSpeed: () => number;
}

class CharacterFactory {
  public static createCharacter(characterName: string): Character {
    switch (characterName) {
      case "PHANTOM":
        return new Phantom();
      case "ARAN":
        return new Aran();
    }
  }
}
class Phantom extends Character {
  getAttackDamage = () => {
    return 20;
  };
  getMoveSpeed = () => {
    return 40;
  };
}

class Aran extends Character {
  getAttackDamage = () => {
    return 30;
  };
  getMoveSpeed = () => {
    return 20;
  };
}

function runGame() {
  const phantom = CharacterFactory.createCharacter("PHANTOM");
  const aran = CharacterFactory.createCharacter("ARAN");
  console.log("팬텀 평타 " + phantom.calculateAttackDamage());
  console.log("아란 평타 " + aran.calculateAttackDamage());
  console.log("팬텀 이동속도 " + phantom.calculateMoveSpeed());
  console.log("아란 이동속도 " + aran.calculateMoveSpeed());
}

runGame();
