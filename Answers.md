# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

forEach` loops over each element in an array, but does not automatically create a new array; while map does create a new a array corresponsing to
each eelemnt

2. What is the difference between a function and a method?

a method refers to a function within an object (an object's functions).

3. What is closure?

a combination of a function and the lexical environment within which that function was declared.

4. Describe the four rules of the 'this' keywor

1. when 'this' is in global scope, it refrences the window or console object.
2. implicit binding: when object.function is called, 'this' (in the function) refers to the the object preceding the dot.
3. new binding: when the 'new' keyword is used to create an instance of an object, 'this' in the constructor funtion refers to that 
    object instance.
4. explicit binding: the 'call' and 'apply' methods explicitly state which object 'this' refers to.

5. Why do we need super() in an extended class?

to cause a child class to inherit the properties and methods of its parent class.