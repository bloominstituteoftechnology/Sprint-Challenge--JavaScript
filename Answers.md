# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Describe some of the differences between .forEach & .map.

`.forEach` iterates over each element in an array. Unlike `.map` it always returns the value `undefined`. <br />
Even more, `.map` iterates over each element in an array, and creates a new array from the provided elements.

### Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

<ul>Five Types:
<li>Number</li>
<li>String</li>
<li>Boolean</li>
<li>Object</li>
<li>Null</li>
</ul>

Arrays can hold multiple values of the types listed above. 

### What is closure? Can you code out a quick example of a closure?

A closure is a variable that is used outside of a particular scope of a function. 

```
const makeSandwich = () => {
  const firstIngredient = 'peanut butter';
  // firstIngredient is defined outside of the 'make' function, closure.
  const make = (secondIngredient) => firstIngredient + ' and ' + secondIngredient;
  return make('jelly');
}
makeSandwich(); // 'peanut butter and jelly'

```

### Describe the four rules of the 'this' keyword. No need to provide examples about it this time.

<ol>Four Rules:
<li>Whatever is defined to the left of a dot is referring to `this`.</li>
<li>If a function is defined in the global scope, the value of `this` will be the window object.</li>
<li>If a constructor function is invoked with `this`, it refers to the instance of the object which is returned by the constructor funciton.</li>
<li>Whenever call/apply/bind is used, `this` is explicitly defined.</li>
</ol>