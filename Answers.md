# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
#list
1. `forEach` is used to iterate over an array or object (array.forEach((parm1,index,completeArray)=> {}) or 
object.forEach((parm1, index, completeObject) => {})), with the first thing passed (parm1) is the value of 
array or object at that index (second thing passed in, index). The third thing passed in is the whole array 
or the whole object. Although both `forEach` and `.map` allow functions, assigning values, and other tasks,
`.map` returns the specified values (returns an array or object or values, whatever is specified) to a new variable.
For example: let newArr = array.map((parm1,index,completeArray)=> {}) or 
let newObj = object.map((parm1, index, completeObject) => {}) ;
#
2. The five types in JavaScript are strings("Hey"), numbers(1), boolean(true, false), objects(array, object and date) 
and functions. Arrays can hold many data types such as strings, numbers, objects and more. You can have an arrays of 
objects that have many different types of key value pairs and the values can be any data type in the object. Arrays have
a lot of uses, as it can handle many data types.

#
3. Closure is used to describe the scope that a function has, it's useful to understand if functions need
access to other functions (or components needed to execute properly) or if you want some functions isolated
from other functions or components. In JavaScript, a function can have enclosed components (variables, functions,
components, etc), and these enclosed components are only accessible by that function. In JavaScript, functions 
look outward, so that function can access variables, functions, and components (if they're not declared in the function's
enclosed components) from outside its own scope (outside its enclosed components). Basically, the function can
access outward components but other functions can't access that function's enclosed components.

const lastName = 'Bond'; // Outward of the function's enclosed components
function greet() { 
  const firstName = 'James';  // Enclosed component can't be accessed directly from other functions or component that
                              // are outside the function (outward).
  alert(`The name's ${lastName}, ${firstName} ${lastName}`); // the function can access the lastName variable outward.
}

console.log(firstName); // Can't access greet's function component firstName as it's enclosed, not accessible from outside
                        // the function.

#
4. 
Implicit Binding. When you call a function within an object (called a method), the method's this 
statement uses properties attached to the object. In the following, hello is the object and myFunc() 
is a method. Example: hello.myFunc() .

Explicit Binding. Is when you want to pass data that's not attched to an object or function to
do a task on that object or function. If the object or function is not connected to some variable 
that has data that you want to use on the object or function, you use EXPLICIT BINDING. Such as 
.call(), .apply() , or .bind(). In the following hello is a function and arVar is a variable passed
to the hello function. Example: hello.call(argVar) .

New Binding. It's used to create a new object from an object constructor, ES5 and ES6 constructor 
function (class in ES6) look different, but the syntax to create new object is the same. When you create 
a new object with the "New" keyword (let objname = New ClassConstruct(prop1, prop2, prop3, etc.), the 
object's constructors this.prop are bound to the new object created. So, the .this references the new object. 
 Example: let newvar = New Hello("prop1","prop2", "etc of new object") .


Window Binding. When you don't have data for a task, such as a function doing a task with data, and the function didn't receive the data by other methods (Implicit binding, Explicit binding, or New binding), than the function will look for
data in the container, or window. The following doesn't have anything specfic to console.log, and it will
log the windows's (or container's) this references. Example: console.log(this) 