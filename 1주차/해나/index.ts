interface Character {
    calculateAttackDamage(): number;
    calculateMoveSpeed(): number;
}

class CharacterFactory {
    getCharacter(characterType: String) {
        switch (characterType.toUpperCase()) {
            case "PHANTOM":
                return new PHANTOM();
            case "ARAN":
                return new ARAN();
        }
    }
}

class PHANTOM implements Character {
    calculateAttackDamage() {
        return 20;
    }
    calculateMoveSpeed() {
        return 40;
    }
}

class ARAN implements Character {
    calculateAttackDamage() {
        return 30;
    }
    calculateMoveSpeed() {
        return 20;
    }
}

const runGame = () => {
    const characterFactory = new CharacterFactory();
    const Phantom = characterFactory.getCharacter("phantom");
    const Aran = characterFactory.getCharacter("aran");
    console.log(`팬텀 공격력: ${Phantom.calculateAttackDamage()}`);
    console.log(`팬텀 이동속도: ${Phantom.calculateMoveSpeed()}`);
    console.log(`아란 공격력: ${Aran.calculateAttackDamage()}`);
    console.log(`아란 이동속도: ${Aran.calculateMoveSpeed()}`);
};

runGame();
