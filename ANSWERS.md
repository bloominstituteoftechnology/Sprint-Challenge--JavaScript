# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
 - .map creates and returns new array
2. What is the difference between a function and a method?
 - method is a function stored as object property
3. What is closure?
 - ability of inner scope to have access to the outer scope
4. Describe the four rules of the 'this' keyword.
 - window/Global Binding - "when the function is invoked that doesn't have anything to the left of the dot, not using the new neither explicit binding then 'this' keyword is going to be window object."
 - Implicit Binding - "when the function is invoked look to the left of the dot and that is what 'this' keyword is going to reference."
 - new Binding - "when the function is invoked with the new keyword, 'this' keyword inside that function is bound to the new object being constructed."
 - Explicit Binding- when 'call', 'apply', 'bind' methods are used. In the below example, .call forces its this to be child

5. Why do we need super() in an extended class?
- same as 'call' in prototype: to access parent's class