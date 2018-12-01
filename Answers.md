## 1. Describe the biggest difference between forEach & map.

`.forEach` does not return any defined value and is able to mutate the array that it is used on, whereas `.map` returns an equally-sized array without directly affecting the original array.

## 2. What is the difference between a function and a method?

Functions are self-contained, independent 'sub-programs'. They do not need to be tied to an object in order to be used.

Methods, on the other hand, are tied to objects and are often used to manipulate instances of such.

## 3. What is closure?

A closure is, in practice, a inner function inside an outer function's definition. It has its own inner scope, and it can also access the outer function's scope (although it cannot access the outer function's `arguments` object) as well as the global scope. However, the outer function will not be able to access anything defined in the scope of the closure.

We say "closure" because it 'encloses' objects inside an inner scope that cannot be manipulated by anything outside it. It is an idea used for applying the concept of encapsulation in object-oriented programming.

## 4. Describe the four rules of the 'this' keyword.

### a. Window / Global Object Binding
   A currently uncommon use of `this` binding that is bound to the outermost context (global context - as in the area that is not bound inside the definition of another object) - this would mean the entire console or window, hence the name.

   This would be like implicit binding, only in this case, the use of `this` is not placed inside an object.

### b. Implicit Binding
   This use of `this` is tied to the context of the object that it is placed inside of. It is like telling the compiler that one is referring to 'this' object that you are inside of.
    
   It is particularly useful when an object's member and a parameter used by the object have the same name (`this` essentially is used to be more specific here).

### c. `new` Binding
   This binding basically creates a new instance of an object (termed as instantiation). It is like considering the object as a user-defined data type and then creating a new variable of type [object].
    
### d. Explicit Binding
   This binding makes use of one of three methods (call, bind & apply) that are used to override the default or implied binding of the current object. These methods change the context of `this` for that object into the parameter that was specified.

## 5. Why do we need super() in an extended class?

`super()` is used to call the parent class that the extending class (or subclass) is inheriting from. The keyword comes from the term "superclass", which is the class being extended. `super()` ensures that the subclass will be identified as an instance of the superclass.