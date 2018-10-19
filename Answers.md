

1. Describe the biggest difference between `.forEach` & `.map`.
<!-- `.forEach` changes our original array, while`.map` returns a new array -->
2. What is the difference between a function and a method?
<!-- A function returns a value, A method is similar to a function, but is part of a class.-->
3. What is closure?
<!-- the combination of a function and the lexical environment within which that function was declared.  -->
4. Describe the four rules of the 'this' keyword.
    <!-- 

    ~Window/Global Object Binding
        When in the global scope, the value of “this” will be the window/console Object;
    ~Implicit Binding
        Whenever a function is called by a preceding dot, the object before that dot is this.
    ~New Binding
        Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
    ~Explicit Binding
        Whenever JavaScript’s call or apply method is used, this is explicitly defined.
     -->
5. Why do we need super() in an extended class?
        <!-- The super keyword is used to call functions on a parent object. -->