# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

**1. Describe some of the differences between .forEach & .map.**

forEach doesn't return anything. Map produces a new array

**2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?**

Types in JavaScript: 
* Boolean
* Null
* Undefined
* Number
* String 
Arrays are special because: 
* They can hold many values under a single name; can access values with index number. 

**3. What is closure? Can you code out a quick example of a closure?**

Closure is an inner scope looking outwardly for some variables. 
```
    const limitFunctionCallCount = (cb, n) => {
    let callCount = 0;
    return (...args) => {
    if (callCount === n) return null;
    callCount++;
    return cb(...args);
         };
    };
 ```
 > Or Simple: 
 ```
    const x = 10;
    const y = 20;
    function multiplyNums(){
        return x * y;
    }
    console.log(multiplyNums());
```

**4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time**

'This' Principles:

1. Window/global this points to that object.
2. Implicit binding - object before dot becomes this. 
3. New Binding - object where the new keyboard called. 
4. Whenever Javascript's call or apply method is used, this is explicitly defined.



 