class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age
    this.happinessLevel = 10
    this.energyLevel = 1
    this.hungry = true
    this.bowlFull = false
    this.tricks = ['fetch', 'roll-over']
    this.trustInOwner = 50
    this.offLeash = false
  }

  run() {
    this.happinessLevel += 10
  }

  eat() {
    if (this.hungry === true) {
      this.hungry = false
      this.bowlFull = false
    }
  }

  lickOwner() {
    this.happinessLevel -= 50
  }

  seeSquirrel() {
    this.energyLevel += 1
  }

  chaseFrisbee() {
    this.energyLevel = 0
  }

}

module.exports = Dog;