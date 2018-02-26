# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

<html>
    <body>
        <h4>
            <p>1. Describe some of the differences between `.forEach` & `.map`.</p>
                <p><i>The differences between the .forEach & .map methods are as follows: .forEach scours an array for a particular item in the                         array. Once it finds the index it returns that from the same array. .map iterates over an array and breaks it up into                             indiviudal parts and then returns a brand new array at the end of the sequence of the indexes that were sought after.</i>                   </p>
            <p>2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?</p>
                <p><i>Undefined, Null, Boolean, Number, String. An array is a special data type called an object. It is considered an object because                     it is essentially a container for various values, similar to the way Object functions.</i></p>
            <p>3. What is closure? Can you code out a quick example of a closure?</p>
                  <p><i>const foo = 'bar';
function returnFoo () {
  return foo;
}
returnFoo(); -> reaches outside its scope to find foo because it doesn't exist inside of returnFoo's scope when foo is referenced.</i></p>
            <p>4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time.</p>
                  <p><i>Principle 1: Window/Global Object Binding
                    When in the global scope, the value of “this” will be the window/console Object;<br>
                    Principle 2: Implicit Binding
Whenever a function is called by a preceding dot, the object before that dot is this.
                    <br>Principle 3: New binding
Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
                    <br>Principle 4: Explicit binding
Whenever JavaScript’s call or apply method is used, this is explicitly defined.
                    </br></i></p>
        </h4>
    </body>
</html>