1. Describe the biggest difference between `.forEach` & `.map`.
.forEach mutates the given array while .map creates a new one.

2. What is the difference between a function and a method?
a method is a function in an object while a function is not.

3. What is closure?
when a an outer function is called and an inner function has closure over the outermost function(s) so it can access variables regardless of when and where the outmost function is called.

4. Describe the four rules of the 'this' keyword.
-- default binding if globally defined
-- implicit depends on where and how the function/method is called. Usually the object on the left of the '.' before the method call.
-- explicit binding forcefully applies the context of 'this' to the function it calls or binds
-- the 'new' keyword applies 'this' to each instance created with the 'new' keyword.
5. Why do we need super() in an extended class?

-- it replaces the need to use .call for 'this'
