# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


# **Answers** #


**Q1**: Describe some of the differences between `.forEach` & `.map`.

You use Map when you want to do something to an array or to a list. You use ForEach when you want to do something with that array.

**Q2**: Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

* Strings 
* Numbers
* Objects
* Boolean
* Undefined

**Q3**: What is closure? Can you code out a quick example of a closure?

In Javascript, closure is an inner function that has access to the environment outside it. For example, the outer function's variables—scope chain is accessible in the inner function. This also means it has access to global variables.

In the below example, you'll find that closure in Javascript means that the 'x' variable in the function will be bale to access the value of 'x' outside the function.

let x = 1;
function () {
  x++;
}

**Q4** Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

1. Default Binding
2. Implicit Binding
3. Explicit Binding
4. New Binding
