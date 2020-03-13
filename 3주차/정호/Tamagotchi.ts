import * as readlineSync from "readline-sync";

import Pet from "./Pet";
import createRow from "./utils/createRow";

class Tamagotchi {
  pets: object;
  commands: object;

  constructor() {
    this.pets = {};
    this.commands = {
      status: this.status.bind(this),
      create: this.create.bind(this),
      sayHi: this.sayHi.bind(this),
      feed: this.sayHi.bind(this)
    };
  }
  public run() {
    while (true) {
      const command = readlineSync.question(`Enter your command:\n`);
      if (!(command in this.commands)) {
        console.log(`그런 명령어 없다`);
        continue;
      }
      const job = this.commands[command];
      job();
    }
  }

  public status() {
    console.log(this.getStatus());
  }

  public create() {
    const name = readlineSync.question(`Write down the name of your pet:\n`);
    if (name.length > 10) {
      console.log(`이름은 최대 10자를 넘길 수 없습니다.`);
    }
    this.createPet(name);
    console.log(`pet ${name}가 생성되었습니다.`);
  }

  public sayHi() {
    const name = readlineSync.question(`Who are you saying hello to?\n`);
    if (!(name in this.pets)) {
      console.log(`그런 애 없다.`);
    }
    const pet = this.pets[name];
    console.log(`${name} 에게 인사합니다!`);
    pet.sayHi();
    console.log(`친밀도 상승!`);
  }

  public createPet(name: string): Pet {
    const pet = new Pet(name);
    this.pets[name] = pet;
    return pet;
  }

  public getStatus() {
    const petArr = Object.values(this.pets);
    const status = petArr.reduce((prev, pet) => {
      return prev + createRow([pet.name, pet.fullness, pet.intimacy]);
    }, createRow([`name`, `fullness`, `intimacy`]));
    return status;
  }

  public feed(name) {
    const pet = this.pets[name];
    pet.feed();
  }
}

export default Tamagotchi;
