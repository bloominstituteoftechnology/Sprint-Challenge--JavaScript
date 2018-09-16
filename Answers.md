
### 1. Describe the biggest difference between .forEach & .map.
--- 
   The biggest difference between .forEach and .map is that forEach only outputs each element in an array, where .map performs allows the running of a function on each array element before placing each element into a new array. 
   
   .map is similar to for eaching through a loop, manipulate the data if needed, and pushing to a new array holder.


### 2. What is the difference between a function and a method?
---
   Functions are indpendent blocks of code that can return values.
   
   Methods are not independent blocks of code and can only be access through the instantiation of an object/class. They are referenced through variables.

   Methods are functions that are defined in an object.

### 3. What is closure?
---
   A closure is the process of a nested function being able to use data in a parent/outer function to use/manipulate. 
   
   I can best describe it as the parent/outer function variables having a global scope to any nested functions within the code block of the parent/outer function.


### 4 .Describe the four rules of the 'this' keyword.
---
   The four rules of 'this' are:
   1.  Implicit Binding - is when a function is invoked/instanstiated and the "this" keyword applies to that particular invocation. It will refer to that function that was invoked. Its usually used for methods of objects.  "left of the dot" principle.

   2.  Explicit Binding - is when an indedpendent/global function uses .call(), .apply() properties to pass the context or reference to other data to the independent function for use by the "this" keyword.

   3.  new Binding - new binding is when a new object is instantiated to a variable reference. This creates a reference to the object but the "this" keyword only references the data of the newly created reference but can access the properties of the parent object.

   4.  Window Binding - if "this" cannot find a local reference to access, it will work its way up the heirachial chain and bind itself to the global reference of the Window object.



### 5. Why do we need super() in an extended class?
---
   Super() is used to pass the extended classes attributes to the parent class so that "this" keyword can be used and the child class can access the parent's properties. It helps us stick to the "DRY" prinicple when building objects. 