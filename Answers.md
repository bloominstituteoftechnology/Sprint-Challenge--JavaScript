# Responses :: Answers to the questions laid out using Mark Down.
### For help support@dreamingrainbow.com! [Go here](mailto://support@dreamingrainbow.com)
## Answers - Google-Fu - Excersized!
1. Describe some of the differences between `.forEach` & `.map`.

    1. The biggest difference is the return. 

        a.  `.forEach` Iterates over an Array performing a given task return nothing.

        b.  `.map` Iterates over an Array performain an action on the orginal item and returning the result in a new array.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
    1.  Arrays

        a.  `@Ryan_Hamblin`'s favorite type!

        b. Used to store data in an index based storage.
    
    2. Object

        a. Object's are used to story key/value pairs.

        b. Object's can be used like array's as well as via associated key reference;

    3. Number

        a. The Number data type handles number/integers in JavaScript

    1. String

        a.  The String data type handles text.
    1. Boolean

        a. The Boolean data type handles on/off true/false yes/no 1/0.

3. What is closure? Can you code out a quick example of a closure?

    1.  "A closure is the combination of a function and the lexical enviroment within which that function was declared" [Closure Via MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

    2. ```JavaScript
            function a(){
                let x = '1'
                return function b() {
                    return x + 1;
                 };
            }
            const x = a;
            x();
        ```

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

    a. Global Scope -- A function held in Global Scope retains `this` in Global Scope. `this` references the window Object. 

    b. Owner Scope -- A function called by a preceding dot hands `this` the object preceding the dot.

    c. Constructor Function -- `this` in the context of a constructor function refers to the instantiation of the object return by the constructor.

    d. `.call` `.bind` `.apply` -- Using these methods allow you to assign this to the object you choose.

