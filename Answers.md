# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
##1. Describe some of the differences between ```.forEach``` & ```.map```

  * ```.forEach``` iterates over a list and runs *callback function* on each item in the list. As a result some side-effects can occur, but undefined is returned, and the list remains the same. ```.map``` iterates over a list like ```.forEach``` but it returns a new array. The new array consists of values which are the result of running a *callback function* once for each item in the array.

##2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

  * String
  * Boolean
  * Number
  * Undefined
  * Null
  * *Arrays* are special because they can hold other JavaScript data types inside them including other *arrays*

  ```const arrayOfTypes = ['Hello', false, 11, ['react', 'angular', 'vue'], null, undefined, { name: 'Deckard'}];```

##3. What is closure? Can you code out a quick example of a closure?

  * A closure is a function that references variables found in it's surrounding scope or parent function. Closures provide access to an outer function's scope from an inner function.

  ```const outerScope = 'bar'```

  ```
  const aClosure = () => {
      console.log(outerScope); // 'bar'
   }
  ```

  * Nested Function Example:
  ```
  function pandoraVolume() {
      let volume = 15;
      function turnItUp () {
        console.log(volume + 100);
      }
      return turnItUp(); // 115
  }
  ```

##4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
 * __Window Principle__: Inside a *'regular function'* not a method, ```this``` will refer your environments 'window' or 'global' object.
 * __Implicit Principle__: When ```this``` is used inside a method it will refer to the object on left hand side of the 'dot' at calltime.

 ```
 'Lambda School'.split('') // 'this' refers to the 'Lambda School' string object
 ```

 * __'New' Principle__: When a function is used as a constructor with the 'new' keyword ```this``` will reference the new object being created by the constructor.

 * __Explicit Binding__: Manually setting the reference value of ```this``` with ```bind, apply, or call```

