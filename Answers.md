##Answers

**1.**  The differences between ```.forEach``` and ```.map``` are that while both methods execute a callback function for each element present in an array in ascending order, ```.map``` creates a new array with the results of said function.

**2.** The five different data Types in JavaScript are:

- string
- number
- Boolean
- Object
- Array

The reason that arrays are so special is that they are objects that have methods and properties that you can invoke at will.

**3.** Closure is what allows an inner function to access its outer function's variables and parameters.

### Example:
```javascript
const outerFunction = (name) => {
  let greeting = 'Hello';
  const innerFunction = () => {
    return `${greeting} ${name}`;
  }
  return innerFunction();
}

outerFunction('John'); //Hello John
```

**4.** The four rules of the ```this``` keyword are:
1. Implicit Binding - When you call a function and it is invoked, look to the left of the dot and that is what the ```this``` keyword will reference.
2. Explicit Binding - Telling the function what the context of ```this``` will be by using ```.call```, ```.apply``` and ```.bind```.
3. new Binding - When a function is invoked with the ```new``` keyword, the ```this``` keyword inside that function is bound to the new object being constructed.
4. window Binding - The ```this``` keyword refers to the window object.