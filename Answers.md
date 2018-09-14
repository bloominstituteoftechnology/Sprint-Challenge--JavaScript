
#Describe the biggest difference between .forEach & .map.
So both methods will iterate through each item in an array but the biggest difference is .forEach on its own preforms exactly like a for loop. It Means that an array has the possibility of being mutated. .map on the other hand will return a new array so the original array stays intact.

#What is the difference between a function and a method?
While all functions are technically methods. A method is a property of an object that has the value of a function.

#What is closure?
A function is a closure. It is where a local scope is created the the global scope doesn't have access to, but the function has the ability to reach outside of its own scope to grab variables from the global scope. It's quite simple :)

#Describe the four rules of the 'this' keyword.
Window/Global binding 'this' will bubble up. So, if using this in javascript, it will look for the object it is bound to. Thus bubbling up looking for what 'this' refers to. If not bound to an object it selects the window object in the browser and the global object in node.js. 

Implicit binding is the object before the dot.

New binding Uses the new keyword to create a new instance of an object.
Explicit binding Having the parent object/class .call or .apply this to the child class/object.

#Why do we need super() in an extended class?
The super() function allows a sub-class to send new attributes up to the parent class/object. It replaces .call()