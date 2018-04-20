# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
* forEach can perform an operation to each element but not returning anything.  map can perform an operation for each element but the it returns a new array with new elements base on your operations.
2. What is the difference between a function and a method?
* A function does not belong to any object.  A method is a function but it belongs to an object.
3. What is closure?
* A Closure is basically any function that has access to out functions' variables and global variables.
4. Describe the four rules of the 'this' keyword.
* 1. Window Binding: It is when you run a function that is not associated with an object then this will be Window.
* 2. Implicit Binding: It is when an object invoke a method and then this will point to that object.
* 3. New Binding: It is create an instance from a construtor function which then creates a new object refering to this.  this.name = John and this.age = 20 when instaniate a new object will return {name: John, age: 20};
* 4. Explicit Binding: It is when you explicitly invoke or bind a function to an object that you want to invoke that function.
5. Why do we need super() in an extended class?
* Since you are inheriting from a certain class you also want its properties that way you don't have to retype the properties from the parent class which will keep your code dry.
