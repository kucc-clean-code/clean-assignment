#!/usr/bin/env node
const fs = require("fs");
const chalk = require("chalk");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout, null);

const menus = {
    main: `
${chalk.magentaBright(
    "사용가능한 명령어는 다음과 같습니다. [명령어] -[option]"
)}

  ${chalk.blueBright(
      "create -[name]"
  )} ..... 새 야옹이 데려오고 [name] 이름 붙여주기
  ${chalk.blueBright("feed -[name]")} ....... [name] 야옹이에게 밥 주기
  ${chalk.blueBright("sayHi -[name]")} ...... [name] 야옹이에게 인사하기
  ${chalk.blueBright("status")} ............. 현재 있는 야옹이들의 정보 보기 
  ${chalk.blueBright(
      "save"
  )} ............... 현재 있는 야옹이들의 정보 JSON으로 내보내기 
  ${chalk.blueBright("load")} ............... 이전 데이터 불러오기
  ${chalk.blueBright("help")} ............... 사용 가능한 명령어 확인하기
  ${chalk.blueBright("quit")} ............... 프로그램 종료하기
`
};

const kittyList = [];
let targetKitty = {};

class Kitty {
    constructor(name, hunger, like) {
        (this.name = name),
            (this.hunger = hunger != undefined ? hunger : 3),
            (this.like = like != undefined ? like : 3);
    }

    feed() {
        this.hunger += 5;
        console.log(`${this.name}: 냠냠`);
    }

    sayHi() {
        this.like += 5;
        console.log(`${this.name}: 야옹!`);
    }

    decrementStatus() {
        this.hunger--;
        this.like--;
    }
}

const getTargetKitty = target => {
    return kittyList.find(kitty => kitty.name === target);
};

const createKitty = name => {
    let newKitty = new Kitty(name);
    kittyList.push(newKitty);
};

const showKitties = () => {
    if (kittyList.length >= 1) {
        console.log("현재 있는 모든 야옹이들의 목록입니다.");
        kittyList.forEach(kitty =>
            console.log(
                `이름: ${kitty.name} 배고픔: ${kitty.hunger} 친밀도: ${kitty.like}`
            )
        );
    } else {
        console.log(
            `아직 데려온 야옹이가 없네요! 😿
create -[name] 명령어를 통해 야옹이를 데려와보세요.`
        );
    }
};

const saveData = data => {
    fs.writeFileSync("kittyCatData.json", data);
    console.log("성공적으로 데이터가 저장되었습니다!");
};

const loadData = () => {
    try {
        let loadedData = JSON.parse(fs.readFileSync("kittyCatData.json"));
        loadedData.map(data =>
            kittyList.push(new Kitty(data.name, data.hunger, data.like))
        );
        console.log(
            `${loadedData.length}마리의 저장된 야옹이를 성공적으로 불러왔습니다!`
        );
    } catch (e) {
        console.log("저장된 데이터가 없습니다! 🙀");
    }
};

const decrementEveryKittesStatus = () => {
    if (kittyList.length >= 1) {
        kittyList.forEach(kitty => {
            kitty.decrementStatus();
        });
    }
};

rl.on("line", function(line) {
    const commandArray = line.split("-").map(command => command.trim());
    [mainCommand, target] = commandArray;
    switch (mainCommand) {
        case "create":
            decrementEveryKittesStatus();
            if (commandArray.length !== 2) {
                console.log(
                    `입력이 올바르지 않습니다. help 명령어를 참고하며 올바른 형식으로 입력해주세요.`
                );
            }
            createKitty(target);
            console.log(`${target}를 데려왔습니다 🐱`);
            break;

        case "feed":
            decrementEveryKittesStatus();
            targetKitty = getTargetKitty(target);
            targetKitty.feed();
            break;

        case "sayHi":
            decrementEveryKittesStatus();
            targetKitty = getTargetKitty(target);
            targetKitty.sayHi();
            break;

        case "status":
            decrementEveryKittesStatus();
            showKitties();
            break;

        case "save":
            saveData(JSON.stringify(kittyList, null, 2));
            break;

        case "load":
            loadData();
            break;

        case "help":
            decrementEveryKittesStatus();
            console.log(menus.main);
            break;

        case "quit":
            rl.close();
            break;

        case "log":
            console.log(kittyList);
            break;

        default:
            console.log(
                line +
                    " 이라는 명령어는 존재하지 않습니다. help를 입력해 사용가능한 명령어를 확인해주세요."
            );
            break;
    }
}).on("close", function() {
    console.log("안녕, 다음에 또 봐요.");
});

console.log(
    `
    ${chalk.magentaBright(
        "================= kittyCat에 오신 것을 환영합니다 ================="
    )}
    명령어를 입력해주세요! 사용가능한 명령어 확인은 [help]를 입력하세요
    `
);
rl.setPrompt("> ");
rl.prompt();
