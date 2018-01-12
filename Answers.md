# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


#### Answers:

> Describe some of the differences between .forEach & .map.

  .forEach has no specific output (unless told), but .map always returns an array

> Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

  1. string
  2. number
  3. boolean
  4. undefined / null (I know, they're not the same)
  5. array

  Arrays are special because they can hold any Type in JavaScript, including other arrays. Also, they are technically the same as objects.

> What is closure? Can you code out a quick example of a closure?

  Closure is the concept that functions only have access to information within their scope, so anything they are nested in as well as global variables.

function doTheThing() {
  let theAnswer = 42;
  function doSomethingCompletelyDifferent() {
    if (theAnswer === 42){
      let beUnamused = true;
    }
  }
}

The function doSomethingCompletelyDifferent() has access to the variable to theAnswer

> Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

  1. refers to the Window object
  2. look to the left of the dot
  3. .bind, .call, .apply
  4. constructors, new, class