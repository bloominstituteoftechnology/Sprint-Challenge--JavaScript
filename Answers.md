#### 1. Describe the biggest difference between `.forEach` & `.map`.
* The .forEach method doesn't return a value. The .map method returns a value so that one can store the results in a new array.
#### 2. What is the difference between a function and a method?
* A method is just like a function except that it 'belongs' to an object.  For example if an object called carObj contains within it a function called drive, the drive function is referred to more specifically as the **drive method** of the carObj.
#### 3. What is closure?
* **Closure is when a function can still refer to variables that are located within the scope it was defined in,  even when executing outside of the scope that it is defined in**.  Let's say innerFunction is defined **within** outerFunction and is then passed to a global scope variable. When innerFunction is executed via the global variable(which refers to innerFunction), any variables contained within the outerFunction scope can still be referred to even though innerFunction is being executed outside the outerFunction scope.
#### 4. Describe the four rules of the 'this' keyword.
* **Default/Window Binding**
        When calling a function, no this context is set and therefore the this keyword within the called function is
        assigned to the window/global object.  An example is when we do a simple function call such as foo().

* **Implicit Binding**
        This occurs when we are calling a function that 'belongs' to an object.  The function is called with the 'containing'
        object placed before the function name separated by the dot operator.  An example is  myObject.foo().  In this case,
        foo is a function or method that is contained within myObject.  The this keyword within foo() is assigned to myObject.

* **Explicit Binding**
        This can occur using one of three methods:  Call(), Apply(), or Bind().  For each of these the object that we want to assign to the
        this keyword is explicitly given.
        .call() example:  foo().call(myObject) - foo function is called and this is assigned to myObject.
        .apply() example: foo().apply(myObject) -  Same as .call()  - the two methods differ in how they pass parameters to the function
        .bind example:   const newFoo = foo.bind(myObject);
            When using the .bind method, a new function is created.  The new function's 'this' is explicitly bound to the object that is listed in the .bind argument list (myObject).  Anytime the new function is called, such as newFoo(), 'this' will be equal to myObject.

* **New keyword Binding**
    This occurs when we want to create a new object using the new keyword.
    Example:  const newObject =  new constructorFunc( [arguments]);
    When using the new keyword, the constructorFunc is called and a new empty object is created.  The 'this' within the constructorFunc is assigned to this newly created object. Within the constructorFunc the new object is referenced by using the this keyword and assigned any new properties ( ex:  this.newProp =  value;). After constructorFunc has completed, the new object is passed back and assigned to the newObject variable.
#### 5. Why do we need super() in an extended class?
* When we use the keyword extends on a class we are saying that it is a child of a parent class.  Due to their being a parent-child relationship we infer that the child class 'inherits' properties of the parent.  In order for the child class to inherit some or all of the parent class properties, the super() function must be called.  The super() function calls the constructor function of the parent class. When this occurs, the newly created child object is passed to the parent constructor along with any parameters that we want to be inherited from the parent class. Those child properties that are also found in the parent are assigned within the parent constructor.  Any properties that are specific to the child are assigned within the child's constructor without the use of super().
