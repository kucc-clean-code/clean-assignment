function calculateAttackDamage(character) {
  switch (character) {
    case "PHANTOM":
      return 20;
    case "ARAN":
      return 30;
  }
  return 0;
}

function calculateMoveSpeed(character) {
  switch (character) {
    case "PHANTOM":
      return 40;
    case "ARAN":
      return 20;
  }
  return 0;
}

function runGame() {
  console.log("팬텀 평타 " + calculateAttackDamage("PHANTOM"));
  console.log("아란 평타 " + calculateAttackDamage("ARAN"));
  console.log("팬텀 이동속도 " + calculateMoveSpeed("PHANTOM"));
  console.log("아란 이동속도 " + calculateMoveSpeed("ARAN"));
}

runGame();
