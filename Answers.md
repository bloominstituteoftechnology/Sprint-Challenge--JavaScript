1: forEach goes over each element of the array and alters it, and map does the same but pushes the array into a new array, whatever variable you use like const mappedArray = array.map ect..

2: Array, Object, String, integer, undefined.
arrays are great because they can store all of these values i belive and can be iterated over, 

3: A closure is a variable that uses scobe, so say you have a function and you don't want the function to have access to the variable, but you do not,
want it to change set the variable you can set it in a heigher scope(above the function), also you can use, block scope, to hold the varaible in and keep it private, like you put brackets on the outside, that keeps the code in the closure of whatever is inside the block but not in the global scope, this can be very useful for big projects in my experience.

4: window binding is used to to bind to the global window, i didn't know what this was good for but Eric told me, he uses it to hault his js from running until the html loads, i guess javascript wants to load first you can use the window binding to alterthat and let the rest bind first.

implicit binding allows you to call the object by name, it is the most common used and the one i am the most comfortable with

the new binding is great for setting a function to a new variable i think it works great when it works for me.

explicit binding seems 