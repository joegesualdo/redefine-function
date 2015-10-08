## Redefine Function 
> Re-define functions

## Install
```
$ npm install --save redefine-function 
```

## API

### Methods
#### .redefineFunction(context, functionString, newFunction)

### .redefineFunction
```javascript
var redefineFunction= require("redefine-function")

var Person = (function(){
  function greeting(){console.log("Hello!")}
  return {
    greeting: greeting
  }
})()

function rudeGreeting(){
  console.log("Sup, sucker!")
}

Person.greeting() // #=>  "Hello!"

redefineFunction(global, "Person.greeting", rudeGreeting)

Person.greeting() // #=>  "Sup, sucker!"
```

##### Also works with prototype functions:
```javascript
var redefineFunction= require("redefine-function")

String.prototype.yell = function(){
  return this + "!"
}

function reallyYell(){
  return this + "!!!!!!!!"
}

"Hello".yell() // #=>  "Hello!"

redefineFunction(global, "String.prototype.yell", reallyYell)

"Hello".yell() // #=>  "Hello!!!!!!!!"
```

