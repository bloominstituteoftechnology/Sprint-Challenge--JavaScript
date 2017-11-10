# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
  1. Describe some of the differences between .forEach & .map.  
     - forEach will iterate through each item in the array and take callback function to be called on each item in the array it's attached to. The forEach method will mutate the existing array while map will create a new array after the callback function is iterated, not affecting the original array at all. ForEach will always return the value of underfined unlike map. 
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?  
  - number, string, boolean, undefined, null, object, symbol  
  - arrays are considered objects that are a list of any data type. Each item in the list is indexed starting at zero and can be accesed by it's index number.Arrays can be use to store several values on a single variable. 

3. What is closure? Can you code out a quick example of a closure?  
  - Closure is the ability to access a functions inner variables outside of its execution context and scope thanks to an inner function being returned as the functions value.  
    - function outerFn () {
      let i = 0;
      function useI () {
       let z = i + 2;
       return useI;
      }
    }
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)  
  - bind
  - call takes two arguments, the first being the .this object to bind and the second being the variable to use in the binding. 
  - apply takes two arguments the first being the .this object to bind and the second being an array to use in the binding.
  - new takes the parameter of the object to automatically bind the .this to.