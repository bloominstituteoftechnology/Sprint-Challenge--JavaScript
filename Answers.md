

1. Describe the biggest difference between .forEach & .map.

Answer: The biggest difference between .forEach and .map is that .forEach does not return a new array, while a .map does. They essentially do the same things, as the function iterates through an array, for each item in the array, both .forEach and .map will pass in a callback function that has the option to return the Item, Index (of that item), and Array (from which the item came from). 

The only thing is, .map iterates and generates a new array.

2. What is the difference between a function and a method?

A function is a block of code with its own scope and takes an input (parameter) and returns a value. A method, is when a function is called on an object. 

Example:

// This .forEach() is a function declared with three parameters
function forEach(element, index, array) {
    return // something;
}

// This .forEach() is not a method, explicitly called on 'someArray'
someArray.forEach()


3. What is closure?

Closure is when an inner function has access to it's own scope; the outer function's scope; AND global scope.

let name = 'Paul';               //global scope

function outerScope(){

    let hobby = 'basketball';     // outer scope

    function innerScope(sibling) {
        return `${name} plays ${hobby} with ${sibling}`;      // own scope
    }
}

4. Describe the four rules of the 'this' keyword.

Rule 1: when in global scope, 'this' will bind to the window.object.

Rule 2: Implicit Binding, when a function is called by a preceding dot, the object before the dot serves as the 'context' for 'this'.

Rule 3: When we use a constructor function to create 'new' objects, the specific instance of the object (the new object) is the 'context' for 'this'.

Rule 4: When using the .call or .apply method, 'this' is defined. The object being called on is the new context:

jerry.speak.call(newman) --> jerry is the context for 'this'

5. Why do we need super() in an extended class?

When extending from a base class to a new sub-class, the super() serves two purposes: a) it allows the sub-class to get the context from the base class automatically (i.e., constructor function) and b) it calls on the original base class so the sub-class can inherit all attributes from the base class. 