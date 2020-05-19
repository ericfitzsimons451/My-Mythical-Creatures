var assert = require('chai').assert;
var Dog = require('../Dog');
var Owner = require('../Owner')

describe('Dog', function() {
  it('should be a function', function() {
    assert.isFunction(Dog)
  })

  it('should instantiate a NEW Dog object', () => {
    var dog1 = new Dog('Charlie')
    assert.equal(dog1.name, 'Charlie')

    var dog2 = new Dog('Alphie')
    assert.equal(dog2.name, 'Alphie')
  })

  it('should have an age', function() {
    var dog1 = new Dog('Charlie', 10)
    assert.equal(dog1.age, 10)
  })

  it('should wake up happy', () => {
    var dog1 = new Dog('Charlie', 10)
    assert.equal(dog1.happinessLevel, 10)
  })

  it('should wake up hungry', () => {
    var dog1 = new Dog('Charlie', 10)
    assert.equal(dog1.hungry, true)
  })

  it('should be able to run', () => {
    var dog1 = new Dog('Charlie', 10)
    dog1.run()
    assert.equal(dog1.happinessLevel, 20)
  })

  it('should lick the owner when it is very happy', () => {
    var dog1 = new Dog('Charlie', 10)
    dog1.run()
    dog1.run()
    dog1.run()
    dog1.run()
    dog1.run()
    assert.equal(dog1.happinessLevel, 60)
    dog1.lickOwner()
    assert.equal(dog1.happinessLevel, 10)
  })

  it('should be able to eat if there is food', () => {
    var dog1 = new Dog('Charlie', 10)
    var owner1 = new Owner('Eric')
    owner1.feedDog(dog1)
    assert(dog1.bowlFull, 'true')
    assert.equal(dog1.hungry, true)
    dog1.eat()
    assert.equal(dog1.hungry, false)
  })

  it('should not leave food in the bowl', () => {
    var dog1 = new Dog('Charlie', 10, true)
    var owner1 = new Owner('Eric')
    owner1.feedDog(dog1)
    dog1.eat()
    assert.equal(dog1.bowlFull, false)
  })

  it('should start to tremble when it sees a squirrel', () => {
    var dog1 = new Dog('Charlie', 10)
    dog1.seeSquirrel()
    assert.equal(dog1.energyLevel, 2)
    dog1.seeSquirrel()
    assert.equal(dog1.energyLevel, 3)
    dog1.seeSquirrel()
    assert.equal(dog1.energyLevel, 4)
  })

  it('should be able to chase something to let off energy', () => {
    var dog1 = new Dog('Charlie', 10)
    dog1.seeSquirrel()
    dog1.seeSquirrel()
    dog1.seeSquirrel()
    dog1.seeSquirrel()
    dog1.seeSquirrel()
    dog1.chaseFrisbee()
    assert.equal(dog1.energyLevel, 0)
  })

  it('should have some tricks ready for people to watch', () => {
    var dog1 = new Dog('Charlie', 10)
    assert.deepEqual(dog1.tricks, ['fetch', 'roll-over'])
  })
})