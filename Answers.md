1. Describe the biggest difference between `.forEach` & `.map`.
* _.forEach_ iterates over an array while _.map_ makes a copy of that array using the output of a function performed on the original array's elements. 

2. What is the difference between a function and a method?
* A method is an function that is part of an object or class; it is non-global. Regular functions, if you will, are essentially methods in the global scope. 

3. What is closure?
* A closure is the combination of a function and the lexical environment within which that function was declared. It means that the location of a variable's declaration does determine its usability.

4. Describe the four rules of the 'this' keyword.

* In general, _this_ in Javascript has a meaning very similar to 
_this_ in English. It points to something. 

* 1 - In global scope, _this_ is pointing to the whole window. 

* 2 - object.function(); functions on the right of . _this_ on the left. It remains true if you stack objects in the notation like so: parentObject.childObject.function(); _this_ is childObject here.

* 3 - In a constructor function, _this_ refers to the product of the function, not the function itself. 

* 4 - Just like in English, _this_ is a pronoun, a shortcut used instead of directly naming something, used to save one from repetition. Normally, _this_ is used to indirectly, or implicitly, point to something. You can explicitly point to things with _this_, and one uses call and apply to do so.

5. Why do we need super() in an extended class?
* _super()_ is how the attributes and methods are inherited by the child class from the parent class.

