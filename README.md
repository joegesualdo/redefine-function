## Redefine Function 
> Re-define functions

## Install
```
$ npm install --save redefine-function 
```

## Usage
```javascript
var redefineFunction= require("redefine-function")

var Greetings = {
  hello: function(){
    return "Hi there."
  }
}

console.log(Greetings.hello()) // Hi there

redefineFunction(this, "Greetings.hello", function(){
  return  "Don't worry about it"
})

console.log(Greetings.hello()) // Don't worry about it
```

## API

### `redefineFunction(context, functionName, newFunction)`

| Name | Type | Description |
|------|------|-------------|
| Context | `Object` | The context of the object or function you want to redefine
| functionName | `String` | A string representation of the function you want to redefine 
| newFunction | `Function` | The function you want to override with 

```javascript
var redefineFunction= require("redefine-function")

var Greetings = {
  hello: function(){
    return "Hi there."
  }
}

console.log(Greetings.hello()) // Hi there

redefineFunction(this, "Greetings.hello", function(){
  return  "Don't worry about it"
})

console.log(Greetings.hello()) // Don't worry about it
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

