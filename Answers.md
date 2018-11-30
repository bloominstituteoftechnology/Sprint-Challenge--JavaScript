1. .forEach will iterate every item of an array as if it was a traditional for loop. The array is modified. .map retains the original array while creating a new one.

2. A function operates within the global scope, whereas a method operates within the scope of it's object. It's essentially a function that is attached to an object.

3. A closure is the concept that within the local scope of a function Variables within can only be access within that function and child functions. When the function ceases so does the variable. This contrasts with a global variable which would be any that exist throughout the entire duration of your application (i.e.: defined in the global scope)

4. I - Window Binding - When the value of this is bound to the window/console.
   II - Implicit Binding - When calling a function with a preceding dot( this.example ) the object before that dot is this.
   III - Explicit Binding - when using methods like .call or .apply you are *explicitly* defining what this is.
   IV - New Binding - When using constructor functions this will refer to the new object that the constructor is creating

5. super() acts as a call for all of the properites on the parent class.