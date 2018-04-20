# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
    The difference between `.forEach` and `.map` is that `.map` create a new array which is not similar to the array which is called upon 
2. What is the difference between a function and a method?
    A method is a function defined and called on an object 
3. What is closure?
    closure is when a function remember and continue to acess the variable surrounding it lexical scope even if you take that function pass it else where and its execute is an entirely different scope   
4. Describe the four rules of the 'this' keyword.
     let try to understand the concept of this keyword as every function why executing has a refrence to the current execution context called "this" it doesnt depend on anywhere shape of where it was written or where the space was called from it only depend on how the function is called
* 1. Default Binding : 
    The this keyword is governed by 4 rules which in order of presidence is 1. new keyword binding 2. explicit binding 3.implicit binding 4 default binding so if the a this aware function is called and it doesnt match rule 1 to 3 then the default binding kiks in i.e it default to the global scope but in strict mode it returns undefined  
* 2. implicit binding 
    if there is a call site and at the call site there is a context object then this points to the context object
* 3. explicit binding 
    when we explicitly use .Call() on a this aware function then the this keyword execution context is the object in which its explicitly called upon 
* 4. new binding
     when a new keyword is used in front of a this aware function there are 4 things that happened i.e 1. a new object is created out of the thin air 2. the newly created object get linked to another object 3. the newly created object get passed in as the excution context oof the function call 4. the object is returned i.e it implice the return this 
5. Why do we need super() in an extended class?
    use of super is to inherit the methods in the parent class 
