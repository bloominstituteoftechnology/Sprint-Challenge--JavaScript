# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.
.forEach() 
* Does not return any values.  
* .forEach calls a function for each array element then goes on to the next element until done.

.map() 
* Creates a new array of the same size as the original.
* Takes a source array transforms the elements as proscribed and returns a new object containing the proscribed transformations.

2. a) Name five different Types in JavaScript. A Type is something that can represent data.
    A: 
      Before ES6 Javascript had 5 primitive data types:
      - Number - which support math operations
      - String - non-numerical characters which cannot be used for math operations.
      - Null (nothing)
      - Undefined
      - Boolean - logical true or false (i.e. yes/no)
      
      * ES6 adds a new primitive data type named 'Symbol'

      Objects are 6th (now 7th) data type.  Two examples of objects are arrays and json objects.  

   b) What is so special about Arrays?
    A: 
      - Arrays are collections of values much like cells in a spreadsheet row.  Each element is indexed starting from '0' and accessed by this index.
      
      - Arrays can contain primitives or objects i.e. a number, string or a json object.


3. a) What is closure? 

 A: Closure is the lexical scope of a function + any variables available to the function that are outside the function's scope.

  b) Can you code out a quick example of a closure?
    A: 
      EXAMPLE
        const calendar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];

        function month(date) {
          let monthName = date.getMonth() -1;
          console.log(calendar[monthName]);
        }
        month(new Date(1953, 6, 5));

      In the above example, closure would be the function month() + the const 'calendar'.  

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

  A: 
    1.  This refers to the object to the left of the dot when it is called by a preceding dot.

    2. The keyword this is defined explicitly when the call or apply method is used. 

    3. When the result of a constructor function the keyword this refers to the specific instance of the object created by the constructor.

    4. In a global scope the window object with be the value of this.
