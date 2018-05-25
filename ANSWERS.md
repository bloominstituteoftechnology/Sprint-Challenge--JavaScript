# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

    Both iterate each item in an array.  But .map will return a result into a new array.

2. What is the difference between a function and a method?

    Function and method both are function.  But the method is a function which is a property of an object.

3. What is closure?

    The inner function can access and use the value of varieble from the function outside.
    for example, function greeting() {
                    const name = 'Ja';
                    function sayHi() {
                        return `Hello, ${name}.`;
                    }
                    return sayHi();
                }
                console.log(greeting());
    
4. Describe the four rules of the 'this' keyword.

    Implicit - 'this' points to the let side of the dot.
    Explicit - tell the object/function what to do (call, apply or bind) and which object that should refer to.  
                example, let sayName = function(lang1, lang2, lang3) {
                           console.log(`I am ${this.name}, I'm learning ${lang1}, ${lang2} and ${lang3} now.`)             
                            }

                        let languages = ['HTML', 'CSS', 'JS'];

                        let ja = {
                            'name': 'Ja',
                            'age': 35
                        }

                        sayName.apply(ja, languages); // I am Ja, I'm learning HTML, CSS and JS now.

    New Binding - when we create a base constructor function/class with 'this' keyword and an object with 'new' keyword (ex, const fred = new Parent({}) ), behind the scene JS will create a new object and save it like this = {}.
    Window Binding - without the above to tell 'this' to refer to, 'this' will default to the window object.

5. Why do we need super() in an extended class?

   When we use 'extends', super() needs to be called in order to pass any new attributes back up to the constructor of the parent object.