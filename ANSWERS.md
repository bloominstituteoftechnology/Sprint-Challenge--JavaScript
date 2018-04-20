# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

The biggest difference between .forEach and .map is that whereas both array functions passes through or traverses a given set or structure of data, the former (that is, .forEach) doesn't really transform the data. It merely iterates over it. The latter (that is, .map), on the other hand, changes the fata in some way.  

2. What is the difference between a function and a method?

A method is a function within an object.

3. What is closure?

A closure is a concept that refers to the function and the environment within which that function is created, including all the variables within the function and outside (in the global scope).

4. Describe the four rules of the 'this' keyword.

a. Window Binding -- This principle says that if you declare a function that uses the "this" keyword but doesn't have anything to the left of the dot, the "this" keyword is going to default to the window object.

b. Implicit Binding -- This principle says that whatever word or object you see when you look to the left of the dot, that is what the "this" keyword is referring to.

c. New Binding -- This principle says that when a function is invoked with the "new" keyword, the "this" keyword inside that function is bound to the new object being constructed by the constructor.

d. Explicit Binding -- This principle says that you can explicitly state what the keyword is by using .call, .apply, or .bind.

5. Why do we need super() in an extended class?

It replaces the "call". It also enables the child class to pass new attributes back up to the constructor.