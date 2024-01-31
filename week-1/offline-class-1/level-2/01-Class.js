
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    // return `${this.name} has ${this.legCount} legs`
    console.log(`${this.name} has ${this.legCount} legs`);
  }
}

let Lion=new Animal("lion",4);

