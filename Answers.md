# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. Describe some of the differences between `.forEach` & `.map`.
    * .forEach will iterate through each item of an array without returning a new array.
    * .map will iterate through each item of an array and will return a new array.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
    * There are 7 data types in JavaScript:
        * Primitives:
            * Boolean
            * Null
            * Undefined
            * Number
            * String
            * Symbol
        * Object
    * Arrays are of the Object type. They are much like normal objects, but they hold items in an order starting from the 0 index. This is what makes them special. Objects have properties that aren't ordered and are accessed by their keys. Arrays are accessed by their index.
3. What is closure? Can you code out a quick example of a closure? 
    * A closure is a way to provide access to local variables and methods without overwriting other variables and methods by providing an area (scope) that is only accessible within that area. The children are able to see the variables and functions of their parents but their parents are unable to see their children's values and functions. This ensures that we can have nameless functions as well as named functions along with the same variable names and method names without conflicting each other like CSS. CSS has rules that overwrite other rules. A rule may be compared to a function that sets different properties and overwrites them.
        * Code example
            ```function sayHello(personName = '') {
                let greeting = `Hello${personName ? `, ${personName} ` : ' nameless person'}!`
                function greetWithName(name) {
                    personName = name;
                }
                greetWithName(personName);
                return greeting;
            }
            console.log(sayHello('joe'));// Hello`
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
    * The this keyword gets this bound to its parent context unless if it's within an arrow function
    * This represents the current context. It's used to replace specific variable names with any variable name that is being passed in.
    * This must use the call, apply, or bind when using arrow functions because arrow functions don't bind the this keyword.
    * The value of this gets determined by the call site of the context from which this is called and that determines the value of this.