# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

#Questions Answers

1. Describe some of the differences between `.forEach` & `.map`.

   `.map` creates a new array of the results or return value, `.forEach` doesn't construct a new array from the return values. 

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

   Boolean, Number, String, Null and Undefined. Arrays helps us organize our data by puting them in a list. Let's say we have a list of different fruits, we can create a list of apples, bananas, kiwis and save it under fruits. 

3. What is closure? Can you code out a quick example of a closure?

   Closure is a function(we will call this func1) that has function(we will call this func2) inside its braces. Func2 will have access to any variables that are available inside the scope of func1 and also global variables of course.

   `function func1() {`
       `let arr = [1,2,3,4,5];`
       `function func2() {`
           `for(let i = 0; i < arr.length; i++){`
                `console.log(arr[i]);`
           `}`
        `}`
        `func2();`
   `}`

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

   The 'this' keyword will refer to the closest object. So if we create a function that does `console.log(this)`, 'this' will refer to the window object since that is the closest object. This is the Global rule.
   
   If we create an Object with the braces and inside that object we create a function (aka method) that does `console.log(this)`, 'this' will refer to the Object that was created since this is now the closest object not window object. This is the Implicit rule.

   This next rule is almost the same as the Implicit rule the only difference is instead of creating an Object with the braces we will use the 'new' keyword and assign it to a variable. This is the 'new' keyword rule.

   Last but not least we have the Explicit rule. In this rule we use .bind .call and .apply methods. These methods are function methods and are used to take the contents of an object.