class Owner {
 constructor(name) {
   this.name = name;
 }

  feedDog(dog) {
    dog.bowlFull = true
  }
}

module.exports = Owner;