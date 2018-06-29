# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
    Map creates a new array while forEach does not.
2. What is the difference between a function and a method?
    Methods are are defined inside of classes while functions are not.
3. What is closure?
    When a function has access to a variable outside the scope of itself.
4. Describe the four rules of the 'this' keyword.
    Window binding - at invocation this has nothing to assign to so it defaults to the window object.
    Implicit binding - at invocation look to what is to the left of the dot.
    Explicit binding - at invocation you tell this what it's going to be using methods call, apply, or bind.
    New binding - the this keyword is bound to a new object being made from the use of new with a constructor.
5. Why do we need super() in an extended class?
    It allows for a child class to gain access and call functions from its parent class.
