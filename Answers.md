# Your responses to the short answer questions should be laid out here using Mark Down.
1.  forEach takes a callback function as an argument and uses that CB on each item in the array.
Map also iterates over each item in the array, changes the items in the way requested and returns a new array with the changed items.  Map does not change the original array.

2. types of data:
String = 'My Name"
number = 12345
boolean = true or false
function
object
Arrays can contain any type of data required, including a mix of the different data types.

3. Closure is when a function has access to the variables and parameters of a surrounding function.  
example: function superStar (actor, movie) {
    let yeppers = "yes go see ";
    function nameMovie (){
        return yeppers + actor + " " + movie + "!";
    }
    return nameMovie();

}

superStar("Idris Elba", "Pacific Rim");

4.  The rules of the :this" keyword are:
    1. "this" will always refer to the closest object.
    2. If inside a function, this refers to whatever object the keyword is set to within the function.
    3.  The value of this can be passed from one context to another by using bind method to "bind" to a different object.
    
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
