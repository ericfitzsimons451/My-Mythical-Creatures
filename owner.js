class Owner {
 constructor(name, trustworthiness = 10) {
   this.name = name;
   this.trustworthiness = trustworthiness;
 }

  feedDog(dog) {
    dog.bowlFull = true
  }

  teachNewTrick(dog, trickName) {
    dog.tricks.push(trickName)
  }

  buildTrust(dog) {
    dog.trustInOwner += 10
    this.trustworthiness += 10
    if (this.trustworthiness >= 100 && dog.trustInOwner >= 100) {
      dog.offLeash = true
    }
  }
}

module.exports = Owner;