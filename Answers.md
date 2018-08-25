1. Describe the biggest difference between .forEach & .map.

While both methods will iterate through each item in an array, the biggest difference is .forEach on its own preforms exactly like a for loop. Meaning that an array has the possibility of being mutated. .map on the other hand, will return a new. This was the original array stays intact.

2. What is the difference between a function and a method?

While all functions are technically methods. A method is a property of an object that has the value of a function.

3. What is closure?

A function is a closure. It is where a local scope is created the the global scope doesn't have access to, but the function has the ability to reach outside of its own scope to grab variables from the global scope.

4. Describe the four rules of the 'this' keyword.

- Window/Global binding
'this' will bubble up. So, if using this in javascript, it will look for the object it is bound to. Thus bubbling up looking for what 'this' refers to. If not bound to an object it bubbles up to the window object in the browser and the global object in node.js.

- Implicit binding
Using

- New binding
Using the new keyword to create a new instance of an object.

- Explicit binding
Having the parent object/class .call or .apply this to the child class/object.

5. Why do we need super() in an extended class?

The super() function allows a sub-class to send new attributes up to the parent class/object.
