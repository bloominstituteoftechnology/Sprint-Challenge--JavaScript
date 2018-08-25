**1. Describe the biggest difference between .forEach & .map.**

.map creates a new array, .forEach doesn't.

**2. What is the difference between a function and a method?**

Scope. Methods have to be called within their given object, but functions are global.

**3. What is closure?**

Closure is when a function remembers its hierarchy and can call on something outside of the function itself.

**4. Describe the four rules of the 'this' keyword.**

-- explicit binding is when we call a function by what's to the left of the period.
-- implicit binding is when we call a function using .apply() or .call()
-- new binding is when we create a new object given parameters defined elsewhere
-- global binding is when we create a variable on a global scale that can be called from anywhere.

**5. Why do we need super() in an extended class?**

super() calls the parent class and allows us to inherit its attributes.