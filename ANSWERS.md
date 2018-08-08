# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
#### Both .foreach() and .map() call a function on each element of an array. However, .map creates a new array of the results of the invoked function while .foreach only loops over each element without creating a new array.
2. What is the difference between a function and a method?
#### A function is a "global" object containing a key:value pair whereas a method is a function(object) that passes another function as a value in the key:value pair.
3. What is closure?
#### A closure gives access to an outer function's scope from an inner function
4. Describe the four rules of the 'this' keyword.
#### - 1. Whenever a function is contained in the global scope, the value of **this** inside of that function will be in the window object.
#### - 2. Whenver a function is called by a preceding dot, the object to the left of the dot is the value of **this**.
#### - 3. Whenever a constructor function is used, **this** refers to the specific instance of the object that is created and returned by the constructor function
#### - 4. Whenever a **call** or **apply** method is used, **this** is explicitly defined.
5. Why do we need super() in an extended class?
#### ```super()``` is needed in an extended class in order to access and call functions of a parent object that's are needed for an extended class.
