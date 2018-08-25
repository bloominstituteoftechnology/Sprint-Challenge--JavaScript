1. Describe the biggest difference between `.forEach` & `.map`.

    The .forEach() method of an array does not return a new array, .map() does.
    The reason is because the purpose of these functions is different. With
    .map() the purpose is to iterate through the array and to change or mutate
    the values in some form. It isn't going to mutate the original array, but it
    will map this repeated step onto each element and return a new array with 
    the mutated values. The .forEach() is just as it states, it is for iterating
    over the array in a generic sense. It does not return anything. It is much 
    more open ended what can be done with it and .map() basically uses a
    .forEach() for a specific functional purpose.

2. What is the difference between a function and a method?

    A function is called without referring to an object or class. It is, for the
    most part, a standalone block of code with potential input or output that
    can be called within the code to perform its process. A method is just like
    a function, but it resides within an object or class and is particularly
    useful to the object it is attached to. It comes from object oriented 
    methodology where an object is made up of a collection of variables and 
    functions. The variables are the properties of the object and the functions
    are the methods that allow for actions to be taken with that object.

3. What is closure?

    A closure is a function that can hold data state. What this means is that
    it can maintain the value of some data, whereas a normal function is a
    process that never holds the data after it is finished. Additionally, with
    a closure, you can create multiple instances of them within your code and
    each one will have its own data to maintain. They will not share the same
    data, but will have their own context.

4. Describe the four rules of the 'this' keyword.

    Global or Window binding - the 'this' keyword will refer to either the
        window object or the module.exports object, depending on if the
        code is being run within a web browser or through node. Functions
        residing within the global scope can have 'this' inside them and it
        will still refer to the global object.

    Implicit binding - the 'this' keyword refers to the object immediately
        to the left of the dot. It refers to the specific object being used
        and to the right of the dot it is the property or method being 
        invoked on that specific object.

    New keyword binding - the 'new' keyword can be thought of as a factory
        that produces new objects that each contain their own context. In
        essence, it allows for the creation of new objects where 'this' will
        be implicitely binded to the context of the object being created.
        Thus, we can create multiple objects of the same type and each will
        maintain their own context and their own 'this'.
    
    Explicit binding - the 'this' keyword is passed in to the .call(),
        .apply(), or .bind() methods of a function. This explicity binds
        the context 'this' refers to within the function itself. Thus,
        the function will have a context bound to it that it can reference
        within itself.

5. Why do we need super() in an extended class?

        The super() method allows a child class to invoke the constructor
        of the parent class. It is needed, so the parent constructor can
        run and create all the properties and methods of the parent that 
        the child context should have access to. It is essentially the way
        child classes can inherit from parent classes.
