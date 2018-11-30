
1.Describe the biggest difference between .forEach & .map.
    Ans: The biggest difference is that .map requires a return statement
    because it returns an array based on the original. In contrast, .forEach
    does not return anything.

2.What is the difference between a function and a method?
    Ans: A method is a function. However it does not stand alone.
    Methods belong to local objects, such as Classes that get called upon
    with dot notation. 

3.What is closure?
    Ans: Closure is the ability for javascript to "remember"
    the value of variables/objects within local scopes and to push
    those values into inner scopes, without exposing them to outside scopes.


4.Describe the four rules of the 'this' keyword.
    Ans: 
        1- "this" has a global definition, if not "redefined" in a local 
        scope it will keep its global scope definition.
        2- "this" will have the value of the Object that called upon a
        method via dot notation.
        3- "this" will be the first argument that an object receives
        when invoking ".apply()" or ".call".
        4- "this" will point back to the specific object that is created 
        using "new {constructor function}," which has "this" in its body.


5.Why do we need super() in an extended class?
    Ans: The extended class must reach out to a "parent" class, 
    if that parent class has relevent attributes that it must get 
    from its "child" class then we need to invoke super() and pass 
    those attributes down.

