
* 1. Describe the biggest difference between .forEach & .map.

forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.

Meanwhile, the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.

* 2. What is the difference between a function and a method?

A function is a piece of code that is called by name. It can be passed data to operate on (i.e. the parameters) and can optionally return data (the return value).

A method is a piece of code that is called by a name that is associated with an object. In most respects it is identical to a function except for two key differences:

A method is implicitly passed the object on which it was called.
A method is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, the object is an instance of that data).

* 3. What is closure?

You can nest a function within a function. The nested (inner) function is private to its containing (outer) function. It also forms a closure. A closure is an expression (typically a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).

Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.

To summarize:

The inner function can be accessed only from statements in the outer function.
The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.

* 4. Describe the four rules of the 'this' keyword.

*  4. 1. Window binding:
    Whenever a function is contained in the global scope, the value of this inside of that function will be the window object. 
    Functions within the global scope are in fact methods on the window object. So, calling greetMe('john'); 
    is no different than calling window.greetMe('john'); Therefore, this inside of the greetMe function points 
    to window.

    function greetMe(name) {
    console.log('Hello ' + name);
    console.log(this);
    }

    greetMe('John');


* 4. 2. Implicit Binding:
    Whenever a function is called by a preceding dot, the object before that dot is this.
    This example is similar to what we saw above with window.greetMe. Here, instead of window we have the greetMe object 
    on the left of the dot. Therefore, this inside of the speak method points to greetMe.

    const greetMe = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
        }
    }

    greetMe.speak('John');


* 4. 3. New Binding:
    Whenever a constructor function is used, this refers to the specific instance of 
    the object that is created and returned by the constructor function.

        // Constructor Function
    // --------------------
    function GreetMe(name) {
        this.greeting = 'Hello ';
        this.name = name;
        this.speak = function() {
            console.log(this.greeting + this.name);
            console.log(this);
        }
    };

    var greetJohn = new GreetMe('John');
    var greetJane = new GreetMe('Jane');

    greetJohn.speak();
    greetJane.speak();


    In the example above, both the greetJohn and greetJane variables are assigned a unique object returned by 
    the GreetMe constructor function. Therefore, this inside of the speak method points to the unique GreetMe 
    object instance stored in the variable on which the speak method is being called. This is evident by looking at 
    the name property on the GreetMe object.

* 4. 4. Explicit Binding:
    Whenever JavaScript’s call or apply method is used, this is explicitly defined.

    greetJohn.sayGoodbye.call(greetJane); //this points to greetJane
    greetJane.sayGoodbye.apply(greetJohn); //this points to greetJohn

    JavaScript’s call and apply methods allow you to execute a function in a different context. 
    The first argument passed to either of these methods explicitly sets what this points to. 
    Because call and apply are explicit, they present the clearest case of what this points to. 
    This is evident by looking at the name property logged to the console by each invocation of the sayGoodbye method.


* 5. Why do we need super() in an extended class?
The super keyword is used to access and call functions on an object's parent.

super([arguments]); // calls the parent constructor.