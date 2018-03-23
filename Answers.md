# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1.  For each will execute a function for every element in an array.
    Map will execute a function for every element in an array and return the results in a new array.

2.  Boolean, Null, Undefined, Number, String.
    An array holds multiple values in 1 variable.

3.  Closure is when an inner function has access to the outer function's variables.
    function show() {
        let password = "123";
        function showPassword() {
            console.log(password);
        }
        
        return showPassword();
    }

    show();

4.  'this' in a global function is the window object.
    'this' in an Object.function is the Object.
    'this' in a constructor function is the instance of the object being created.
    'this' in a '.call' / '.apply' method is explicitly defined.