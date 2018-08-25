1. Describe the biggest difference between `.forEach` & `.map`.
    map return new array of the same length and allocates new memory for the array where as forEach does not return new array. Withe respect to speed, map method is effective and most economic. 
2. What is the difference between a function and a method?
    A method is a function associated with objects where as functions are not associated with objects. 
3. What is closure?
    It is the ability of a function to remember and continue to access the variables surrounded in that lexical scopes..even if you take that function send elsewhere OR pass it else where and it executes in entirely different scope.

4. Describe the four rules of the 'this' keyword.
    1)   Window/Global binding:-  When in the global scope, the value of 'this' will be the window object.
                    Example: function getName(name) {
                            console.log(this);
                            console.log(name);
                        }
    2)  Implicit binding:-  When a function is called by preceding a dot, the object before represent 'this' key word
                    Example: let persons = {
                                name : "venky",
                                age : 'still 33',
                                getDetails: function() {
                                    console.log(`My name is ${this.name} and my age ${this.age}`)
                                }
                           } 
                        persons.getDetails();
    3) New binding:- Whenever a constructor function is used, 'this' key word  refers to the instance of the object that is created and returned by the constructor function. 
                   Example:  function Person(name,age) {
                                  this.name = name;
                                  this.age = age;
                              }  
                              const me = new Person("venky", 33);
    4) Explicit binding:- Whenever we use javascript methods such as call(), apply(), and bind()  the key word 'this' is explicit.

5. Why do we need super() in an extended class?
       the super() key word is used to access and call function on an object's parent.

