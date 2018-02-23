# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# Describe some of the differences between `.forEach` & `.map`

`forEach` is a method on the Array type that accepts a higher-order function that takes a single argument (the individual item of the array) and calls the function body on that element.

`map` is a method on teh Array type that, like `forEach`, takes a function as an argument and calls that function, passing in each individual element of the array and calling the function on the element, passing the element back into an array and returning it.

The difference between the two is subtle, but important. `forEach` implies some kind of side effect; for example, we could mutate the original array, or `console.log` each element to see what our array looks like. `map` on the other hand is a more generic abstraction, traditionally does not mutate anything but instead returns a new array with the original elements untouched. `map` also has significant meaning in functional programming, and can be used on more than just arrays but other algebraic data types, such as Functors.


# Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

1. Numbers
2. Strings
3. Arrays
4. Objects
5. Functions

Arrays are special because (1) every programming language has its own version of an array; (2) because it is a particular implementation of a List, which forms the basis of all other complex data types (for example, an Object can be seen as an Array containing other Arrays with two parts, index 0 representing the key and index 1 representing the value); (3) because they are very fast when it comes to index lookup.


# What is closure? Can you code out a quick example of a closure?

Closure embodies the concept of local scope. When a function wraps a variable, it is said to "close" over that variable, preventing access from outside the function. This means we can declare variables that might exist in the outer scope, but have special meaning from within the context of the function.

That also means that other functions nested inside the outer, "closing" function have access to everything outside them (but do not have access to variables inside functions in its own body -- unless the outer function calls the inner function, and the inner function returns that variable).

The idea of closure is very important for a lot of reasons. We can use them to avoid polluting the global namespace. We can assign a function call to 2 separate variables, and each of those variables will keep track of any changing values inside it without clashing with the other call. We can wrap anything inside a specific function call, binding those variables to that context and keeping track of them as separate containers (for example, creating a new `app` inside express by calling `express()` allows that particular `app` to exist more or less independently of another call to `express()`, allowing for containerization).

An example of closure:

``` javascript
const v4 = require('v4')
const token = require('some-tokenizer')

const employee = { name: 'Andrew', occupation: 'Software Engineer' }

function generateEmployeeCredentials(options) {
  const employee = options.employee
  const manager = options.manager
  const clearanceStatus = options.clearanceStatus
  const password = employee.password
  const email = employee.password
  const id = new v4()

  console.log(employee.name)

  return {
    username: email,
    id,
    token: new token({ name: employee, password })
  }
}

console.log(employee)
// => { name: 'Andrew', occupation: 'Software Engineer' }

generateEmployeeCredentials({
  employee: {
    name: 'Bill',
    password: 'elbowGrease123',
    email: 'bill@microsoft.com'
  }
  manager: 'Justin Bossman',
  clearanceStatus: 'orange'
})
// => 'Bill'

```


# Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

1. Global context: In node, the global context is called `global` (unless you're inside a specific file, in which case the "global" context is `module.exports`. In the browser, the global context is `Window`. The global context is the outermost and highest context inside a program; inside functions declared with the `function` keyword, `this` refers to the global scope.

2. Implicit binding: Implicit binding is when methods inside an object are bound to the containing object, so "this" refers to the object. This is the context in which the method is being called. A trick to remember this is "whatever is left of the dot". Returning "this" at the end of the function allows us to chain methods together.

3. "New" keyword: When using a function constructor, anytime we construct an object with "new", "this" refers to the instantiation of the constructor. At the time of writing the constructor, we don't know what "this" is going to be. Only when the instance is instantiated does "this" have meaning.

4. Explicit binding: Explicit binding is when we use the `bind`, `call` or `apply` method on a function, which allows us to manually assign the value of `this`. This gives us more fine-grained control over what an object inherits, and also gives us an escape hatch when we're unsure what `this` might refer to at runtime or when the code gets confusing/ambiguous.

