The Biggest difference between .forEach and .map is that .forEach is VOID meaning it doesn't return anything. 

Methods are functions that are bound to classes or objects but not all functions are methods. (unless you are looking at it from the global scope.)

Closure is essentially a function with in a function that has access to all the variables created within that function scope. 

Implicit: declared by using dot notation and referring to what      is left of the dot.
explicit: having to physically call a binding of :
        -.call : taking in the first parameter to change the context and the following parameters to be passed in that are separated by commas (C-all = Commas). 
        - .apply: taking in only two parameters. The first assigning context the second being an array.
        - .bind: specifically used to change the context and essentially creating a new function within the context that will allow you to pass in different parameters.
New: a new binding is created when you use the new Keyword to       create a function and uses ``this`` to "describe" that          function.
Default/Window: ``this `` will check through the "layers" of        your scope to see if any of the other rules (listed above)      apply and if not, it will default all the way back to the       window. 