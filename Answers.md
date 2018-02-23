# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
> 1. Describe some of the differences between `.forEach` & `.map`.
> The difference between '''.forEach''' and '''.map''' is that '''.forEach''' has the ability to call the function provided on each element of an array, but not another array of its same size. Instead it returns the values changed from the function in the orignial arr. Whereas '''.map''' calls for an entirely new array, with these new values based on the function on each element in the array. 

> 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

>some javascript types are Booleans, Arrays, Strings, Objects, and numbers. Arrays are special because of their ability to iterate new values through functions,that can be added, deleted, and manipulated creating very flexible data. 

> 3. What is closure? Can you code out a quick example of a closure?

>closure allows you to extende a variable's parameters outside of its local function. When a normal function and variable are called and defined, it runs locally and remains there, and does not run outside of that scope with that variable. Closures allow you to define the variable locally, but also defines the function within a function so the variable will run beyond its local and parent roots. 

 function myFunction (x){
     let x = 2b;
     return function (){
         x +=2;
         return x;
     }
 }
 let x = myFunction ();
};

> 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

>The four rules of the 'this' keyword are as follows:
>1.Window/Global Object Binding 
>2.Implicit Bindig
>3.New Binding 
>4.Explicit binding 
