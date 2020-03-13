import getUpperBoundedValue from "./utils/getUpperBoundedValue";

class Pet {
  public name: string;
  public fullness: number;
  public intimacy: number;
  constructor(name) {
    this.name = name;
    this.fullness = 0;
    this.intimacy = 0;
  }
  feed() {
    if (this.fullness === 100) {
      this.intimacy -= 5;
      return;
    }
    const randomNumber = Math.round(Math.random() * 10);
    this.fullness = getUpperBoundedValue(this.fullness + randomNumber, 100);
    this.intimacy = getUpperBoundedValue(this.intimacy + 1, 100);
  }
  sayHi() {
    this.intimacy = getUpperBoundedValue(this.intimacy + 1, 100);
  }
}

export default Pet;
