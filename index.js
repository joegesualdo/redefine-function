// Inspired from http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
function redefineFunction(context, functionString, overrideFunction){
  var namespaces = functionString.split(".");
  var func = namespaces.pop();
  for(var i = 0; i < namespaces.length; i++) {
    context = context[namespaces[i]];
  }
  context[func] = overrideFunction;
}

module.exports = redefineFunction 

