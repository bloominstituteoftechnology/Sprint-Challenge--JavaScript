1. The biggest difference is that .map() creates a new array with the results of the function that is executed on each array element.

2. Generally speaking a method is a function that is a member of an object or class.

3. Closure  is like scope in which the variables in parent function are available to the child function of the parent function. Like the nested functions have access to all the variable of their parent functions. The closure is the parent function of all the nested or child functions.

4. The 4 rules are: Implicit, Explicit, New Binding, and Window Binding.

    1. Implicit - When the "this" keyword refers directly to the object that it linked to by means of dot notation, but can be attatched directly to the method of the object it is in.

    2. Explicit - When the "this" keyword is used in a function that is separate from the object or objects that it will be applied to, but when the function containing "this" explicitly defines the object it is to be applied to during the function call.

    3. New Binding - When the "this" keyword is used in a object constructor and a new instance of that object is constructed, the  "this" refers to the new instance of the constructed object.

    4. Window Binding - When the "this" keyword is used in a function that when is called does not used bind, call, apply or is not a new object/ instance of a custructor / constructed object, and there is not an identifier via dot notation, "this" defaults to refering to the window object.

5. The super() keyword is used in extend classes to access the function attached to parent objects.