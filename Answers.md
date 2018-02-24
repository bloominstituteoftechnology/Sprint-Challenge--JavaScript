# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. Describe some of the differences between .forEach & .map.
*.forEach* iterates over a list or array of items, and performs the same function on each element to alter them.
*.map* iterates over a list or array in the same manner as above; however, it returns a new array containing mutated elements. Also .map can be used to elicit sub-arrays. 

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
    1.  strings
    2.  numbers
    3.  booleans
    4.  null/undefined
    5.  objects
Arrays are a type of object that have accept to the Array prototype methods. 

3. What is closure? Can you code out a quick example of a closure?
Closure occurs when a function enclosed within another function is able to access it's outer of enclosing function's variables. 
const myPerson = () => {
    const name = 'Iqra';
    return () => {
        console.log (`My name is ${name}`);
    };
};

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
    1.  Window/Global Object Binding : if 'this' is within a function that is being invoked, then that function's runtime environment i.e the window becomes it's context. Thus the window global object is what this points to. 
    2.  Implicit Binding: 'this' refers to the object within which 'this' may be used. For example this used within a method, points to the method's object.
    3.  New Binding: Implies to the use of 'this' in a constructor context. 'this' refers to the constructor's attributes that will be passed onto the new object being created by the constructor. 
    4. Explicit Binding: call or apply methods (when a child may need to access attributes of a parent).
