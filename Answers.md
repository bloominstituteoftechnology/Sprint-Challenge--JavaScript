<!-- Describe the biggest difference between `.forEach` & `.map`. -->
.forEach loops through an array without modifying it and
.map creates a new array with mutated values. <!--wrote this down back in the pre-course notes OP-->

<!-- What is the difference between a function and a method? -->
A function is the potential for logic while a method is
a built in function that is attacted to an object. 
<!-- What is closure? -->
A closure is an inner function that has access to the outer functions variables
which can allow programmers to write cleaner and better code. 
<!-- Describe the four rules of the 'this' keyword. -->
Implicit Binding:
when you call a function and the function is invoked look to the left of the dot and
that is what the "this" keyword is going to reference.

Explicit Binding: explicitly states what "this" keyword is when we do dot call
into the argument that we pass to our dot column invokocation.

New Binding:
the new binding rul stats that when a function is invoked with the "new" keywork that
"this" keyword inside the function is bound to the new object being constructed

Window Binding:
 is when you invoke a function that uses the "this" keyword but there is nothing
 on the left of the dot not using the new binding or call, apply, or bind. That
 is when the "this" keyword is going to default to the window obj.
<!-- Why do we need super() in an extended class? -->
to bind the "this" keyword to the parent. 