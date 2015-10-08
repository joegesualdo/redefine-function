var expect = require("chai").expect
var redefineFunction = require("./index")

describe("redefineFunction", function(){
  it("correctly redefines a function", function(){
     this.Greetings = {
      hello: function(){
        return "Hi there."
      }
    }
    expect(this.Greetings.hello()).to.equal("Hi there.")
    redefineFunction(this, "Greetings.hello", function(){
      return  "Don't worry about it"
    })
    expect(this.Greetings.hello()).to.equal("Don't worry about it")
  })
})
