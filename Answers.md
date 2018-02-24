# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. .foreach outputs each element in an array by itself, while .map creates a new array based off the the original array but allows it to be manipulated such as multiplying each element or dividing etc. 
2. Booleans, Numbers, Arrays, Objects, and Strings. Arrays are special because they allow you to log data into a single area that can also be manipulated letting you add data, delete data, and even multiple the data inside, divide it, get the mean of all the numbers in the data.
3. closure is when you use a function and it accesses the global scope rather than the local scope.
  
  function name (firstName, lastName) {
    const greeting = 'Hello my name is';
    function fullName() {
        return (greeting + ' ' + firstName + ' ' + lastName);
    }
    return fullName();
}
console.log(name("Nick", "Coultas"));
   
4. Window/Global Binding: when this is called out of the original scope of where it's called it goes to the global scope and in a browser it goes to the window.
 Implicit: whenever a function is called by a dot, the object before the dot becomes this. 
 New Binding: it refers to something specific using a constructor function  Explicit Binding: When .call and .apply is explicitly used.   