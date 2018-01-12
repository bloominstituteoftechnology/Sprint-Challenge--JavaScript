# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)<
1. Describe some of the differences between `.forEach` & `.map`.
For each is executing a function on each element of your array. It will mutate your array,unless the function did not change any of the elements. It also does not return anything. 
Map will also execute a function on every element in your array but it will not mutate your array it will return a new array. For example aif you have an array[1,2,3]
and map it with a tripling function it will return a new array=[3,6,9] and not mutate your original array.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
String

Number

Boolean

Object

Array are ordered collections that have a proerty length and various methods to manipulate its elements. This allows you to eaisly search,sort,delete,and insert and makes them special.

3. What is closure? Can you code out a quick example of a closure?
Closure is when a function is able to remember and access its  scope even when the function is  outside its  scope.
example:
function f() {
  let x = 2;
  function g() {
    console.log(x);
  }
  return g;
}
var h = f();
h();

4. Describe the four rules of the 'this' keyword.
        1.  Whenever a function is contained in the global scope, the value of this inside of   that function will be the window object.
        2.  Whenever a function is called by a preceding dot, the object before that dot is this.
        3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
        4. Whenever JavaScript’s bind, call or apply method is used, this is explicitly defined.
