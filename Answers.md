# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1) .forEach: is like a shorthand for FOR loops. Will affect every element in the array via some callback once.

   .map creates a new array filled with elements that have been changed via a callback.

   .map doesn't mutate the original array at all.

2) 5 Types in JS:
    String-- anything between quotations.

    Number-- any number (integer, decimals, negative) except infinity.

    Boolean-- true or false values, like in Logic.

    null-- type from devs that means there hasn't been a value assigned.

    undefined-- means the computer is telling you that some variable doesn't have a value assigned to it.

    Arrays are cool because they allow you to store similar data types. I can group together numbers, string, etc. And have access to them at any time via indexes. You can loop over arrays, they have built in methods that allow you to do more things to them also. Arrays are also mutable, unlike strings.

3) Closure is the idea of creating scope over a referenced variable inside of a function. I think of it kind of like scope, where you have access to global variables, but local stuff is enclosed from the outside.

   let closureExample = () => {
     let count = 0;
     let countUp () {
       console.log(count);
       count++;
     }
     return countUp;
   }

   closure occurs on line 27. If i tried logging countUp, i'd get undefined.

4) Four rules for 'this':

  1) Global-- idea that the 'this' context is defined globally on a server or in the window. that's the 'this' context.

  2) Implicit Binding-- idea that when you create an object, you look to the object for its reference (dog.name), would have the dog object as the 'this' context.

  3) New keyword-- idea that you can create objects off the prototype and it will inherit that context.

  4) Explicit binding-- when you need to set the context yourself, via .bind, .apply, .call.
