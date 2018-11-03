biggest difference between .map and .forEach is that .map returns a new array.

difference between functions and methods are that methods are defined within the scope of an object.

a closure is an inner function which has access to an outer function's variables.

1. window binding - default global scope if "this" is not define.
2. implicit binding - whenever a function is called by a preceding dot, the object in front of the dot is "this". object scope.
3. explicit binding - whenever .call(), .apply(), or .bind() method is used, "this" is explicitly defined.
4. new binding - when constructor function is used, "this" refers to the specific instance of the object.

we need super() in an extended class to get access and call functions from the parent constructor.
