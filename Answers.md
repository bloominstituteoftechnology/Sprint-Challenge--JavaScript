<!-- 
1.  Describe the biggest difference between .forEach & .map.
    The difference between .forEach and .map is that the .forEach method executes a function (anonymous or not) on every element in an array. It does not create a new array, but instead can change the original array via the function call.
    The .map method makes a copy of an array and modifies the copied array by returning the results of a function on every element in the array. The original array is left unchanged.
    The major difference between the two methods is that .map actually creates a new copy of the array, whereas .forEach does not.

2.  What is the difference between a function and a method?
    A function is a piece of code that typically performs an action, and can be used and re-used to accomplish a certain task. Functions are called by their name and help keep code clean and simple by allowing tasks to be repeated. They can be passed parameters to make them dynamic and can return data.
    A method has the same functionality as a function, but it is associated with an object and is called by the object's name. A method is essentially a property on an object.

3.  What is closure?
    Closure is when a function gains access to the outer scope of another function or piece of code. Since the let and const keywords are both block-scoped, they typically only have access to the local scope of the function, but when closure occurs, that scope is expanded. The technical definition is when a function has access to the lexical environment within which the function was declared, but in more simple terms, that means when a function has access to the private variables defined in the parent scope.

4.  Describe the four rules of the 'this' keyword.
    1. Window/Global/Console - This is when the "this" keyword isn't pointing to a specific reference/pointer variable, so it points to the Window/Global object. The Window/Global object is the parent object that everything else is built from and includes the browser's Console.
    2. Implicit Binding - This is when binding occurs automatically. The "this" keyword is invoked within a function and points to the object to the left of the dot when the function is called.
    3. New Binding - This occurs whenever a constructor function is used. The "this" keyword refers to the specific instance of the object that is created by the constructor function. It usually involves the syntax "new [object]", hence the term New Binding.
    4. Explicit Binding - This occurs whenever the "call", "apply", or "bind" methods are used on a function. It is called an Explicit Binding because you are explicity (as opposed to automatically) passing in a "this" context to one of the above methods.

5.  Why do we need super() in an extended class?
    The super keyword is very important because it is what allows a class to be extended from (built upon) another class. A class cannot be "extended" without the super keyword or it will throw an error. Essentially, the super keyword is what allows class properties and methods to be passed down (inherited) to another class (child). It is used to tell a parent's constructor to grab the child's attributes, and it makes it possible to not have to use the "Object.create" syntax to pass down a class's methods.
-->
