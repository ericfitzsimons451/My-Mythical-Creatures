var assert = require('chai').assert
var Dog = require('../dog')
var Owner = require('../owner')

describe("Owner", () => {
  it('should be a function', () => {
    assert.isFunction(Owner);
  })

  it('should have a name', () => {
    var owner = new Owner('Eric')
    assert.equal(owner.name, 'Eric')
  })

  it('should be able to feed the dog', () => {
    var dog = new Dog('Charlie')
    var owner = new Owner('Eric')
    assert.equal(dog.bowlFull, false)
    owner.feedDog(dog)
    assert.equal(dog.bowlFull, true)
  })

  it('should be able to teach the dog tricks', () => {
    var dog = new Dog('Charlie')
    var owner = new Owner('Eric')
    assert.deepEqual(dog.tricks, ['fetch', 'roll-over'])
    assert.equal(dog.tricks.length, 2)
    owner.teachNewTrick(dog, 'lie down')
    assert.deepEqual(dog.tricks, ['fetch', 'roll-over', 'lie down'])
    assert.equal(dog.tricks.length, 3)
  })

  it('should develop a powerful bond with the dog', () => {
    var dog = new Dog('Charlie')
    var owner = new Owner('Eric')
    assert.equal(dog.trustInOwner, 50)
    owner.buildTrust(dog)
    assert.equal(dog.trustInOwner, 60)
  })

  it('should be able to take the dog off the least when the bond is strong enough', () => {
    var dog = new Dog('Charlie')
    var owner = new Owner('Eric')
    owner.buildTrust(dog)
    owner.buildTrust(dog)
    owner.buildTrust(dog)
    owner.buildTrust(dog)
    assert.equal(dog.offLeash, false)
    owner.buildTrust(dog)
    owner.buildTrust(dog)
    owner.buildTrust(dog)
    owner.buildTrust(dog)
    owner.buildTrust(dog)
    assert.equal(dog.offLeash, true)
  })
})