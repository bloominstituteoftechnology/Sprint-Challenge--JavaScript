# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. A forEach goes through each item in an array and returns something that is done to it without making a new array; map does the same but makes a new array

2. Five type of Javascript data: Strings, Numbers, Objects, Arrays, Maps, Date.
   - Arrays are special types of Objects

3. Closures are functions that returns a function that retains the access to variables after the main function has exit.

``` javascript

function age(name) {
  return (age) => {
    return `${name} is ${age} years old.`
  } 
}
const user1 = age('Consuella');
const user2 = age('Ryan')
console.log(user1)
console.log(user1(45)); // remembers name and knows that this is age
console.log(user2(31))
```
