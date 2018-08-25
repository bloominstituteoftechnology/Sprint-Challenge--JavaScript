1) Both call a function on every element in an Array. The difference is that map() uses return values and returns a new Array of the same size.

2) Both are functions for the most part, except that method has two differences: its implicitly passed the object its called on, and its able to operate on data contained within a class

3) A closure is like one of those nested boxes or eggs etc, where you open one and theres another, open it and theres another, etc. Each new "layer" can access all the layers before it. But nothing outside the main container can access anything inside the main container. 

4) a: Window Binding is the default without the this keyword used, global. 
   b: Implicit binding occurs when dot notation is used to invoke a function.
   c: New Binding occurs when the new keyword is used to build a new instance, binding `this` to to the new object.
   d: Explicit binding occurs when .call(), .apply(), or .bind() are used on a function.

5) .this() cannot be used until super() is called    
