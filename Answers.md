# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. .forEach calls a function on every element in the calling array whereas .map creates a new array that has been modified in some way by a provided function.

2. Javascript has a few types such as numbers, booleans, arrays, objects, strings. Arrays are special as they represent a list of data in a sequencial manner. They hold many values under a single name and each value can be accessed by its index.

3. A block inside of a function is an example of closure where the local scope of variables inside the block can be accessed as well as the global variables and outer function variables.

..* function sayHello (str) {
    console.log("Hello" + str "!");
}

sayHello("Erik");

4. Implicit binding of the "this" keyword points to the object that is left to the dot operator when a function is invoked. Explicit binding references the object that is given by the context passed to .call("context"), .apply("context", array), or .bind("context"). New binding utilizes the new keyword as it is invoked to create a new object using a constructor. Window binding applies to the global scope of a function that is invoked without nothing left to the dot operator or that doesn't use an explicit binding function.