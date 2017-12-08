# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

+1. Describe some of the differences between .forEach & .map.
+⋅⋅* The key differene between these two is that map gathers results into a collectin and forEach doesn't return anything.

+2. Name five different Types in Javascript. A Type is something that can represent data. What is so special about Array?
+⋅⋅1. Boolean
+⋅⋅2. Null
+⋅⋅3. undefined
+⋅⋅4. String
+⋅⋅5. Number

+3. What is closure? Can you code out a quick example of a closure?
+⋅⋅* A closure gives access to an outer function's scope from an inner function.
```
+let greet = 'hello';
+
+const hi = () => {
+    const bye = 'goodbye'
+
+ console.log(greet) => 'hello';
+ console.log(bye) => 'goodbye';
}
```
+4. Describe the four rules of 'this' keyword. No need to provide examples about it this time :)
+⋅⋅1. whenever a function is contained in the global scope, the value of 'this' inside of that function will be a brand new object.
+⋅⋅2. Whenever a function is called by a preceding dot, the object before that dot is 'this'
+⋅⋅3. Whenever a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function.
+⋅⋅4. Whenever 'call' or 'apply' method is used, 'this' inisde the function is the object that is passed in as the argument.

