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
    owner.feedDog(dog)
    dog.bowlFull = false
  })
})