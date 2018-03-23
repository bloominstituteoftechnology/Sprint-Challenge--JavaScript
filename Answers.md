# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. forEach only needs to perform the callback on each item, whereas map returns a string with the results of the callback function.

2. object, class, function, string, variable : Arrays are a group of any types

3. Closure is using a function within *another* function's scope.
const counter = () => {
  let count = 1;
  return function realCounterFunc() { return count++; };
};

4. Window binding, implicit binding, explicit binding, New binding.