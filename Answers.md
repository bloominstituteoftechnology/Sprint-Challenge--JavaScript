
1. **Describe some of the differences between .forEach & .map.**
    `.foreach` executes a callback function on each element within an array and returns undefined. While `.map` also calls a callback on each element, it does not mutate the original array; instead, it returns a new array based on the results of the callback function. `.map` is favored in functional programming as it leaves the original array unchanged. 


2. **Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?**
    1. Booleans `true` or `false`
    2. Strings `'this is a string'`
    3. Numbers `20`
    4. Objects
    5. Arrays - Arrays can contain any type including other arrays and there is no limit to the number of items you may store within. Arrays also have methods and properties built-in that allow you to quickly transform data.  

    
3. **What is closure? Can you code out a quick example of a closure?**

   A closure is a function inside of a function that has access to the outer function's variables.
   ```javascript
      const counter = () => {
         let count = 0;
         return () => {
            count++;
            return count;
        };
        };

    const myCounter = counter();
    console.log(myCounter());
   ```

4. **Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)**

    1. Window Binding - Functions on the global scope that contain `this` will be referring to the window object
    2. Implicit Binding - When dot noation is utilized to invoke a function, whatever left of the dot becomes the context for `this` 
    3. Explicit Binding - Explicity setting `this` is bound to via `.call`, `.apply`, or `.bind`
    4. New Binding - When `this` is used in an object constructor.