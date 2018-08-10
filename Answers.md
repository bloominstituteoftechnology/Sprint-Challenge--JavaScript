1. Describe the biggest difference between `.forEach` & `.map`.

    The map() method produces a new array whereas the forEach() does not mutate and loops through the array.
2. What is the difference between a function and a method?

    Method is a function within an onject.

3. What is closure?

    Closure is a function that is nested in another function and has access to the varieblesof the enclosing function as well as the global schope.

4. Describe the four rules of the 'this' keyword.

     Implicit Binding

        Remember, the goal here is to be able to look at a function definition using the this keyword and tell what this is referencing. The first and most common rule for doing that is called the Implicit Binding. I’d say it’ll tell you what the this keyword is referencing about 80% of the time.

        Let’s say we had an object that looked like this

        const user = {
        name: 'Tyler',
        age: 27,
        greet() {
            alert(`Hello, my name is ${this.name}`)
        }
        }
        Now, if you were to invoke the greet method on the user object, you’d do so be using dot notation.

        user.greet()
        This brings us to the main keypoint of the implicit binding rule. In order to figure out what the this keyword is referencing, first, look to the left of the dot when the function is invoked. If there is a “dot”, look to the left of that dot to find the object that the this keyword is referencing.

        In the example above, user is to “the left of the dot” which means the this keyword is referencing the user object. So, it’s as if, inside the greet method, the JavaScript interpretor changes this to user.

        greet() {
        // alert(`Hello, my name is ${this.name}`)
        alert(`Hello, my name is ${user.name}`) // Tyler
        }
        Let’s take a look at a similar, but slightly more advanced example. Now, instead of just having a name, age, and greet property, let’s also give our user object a mother property which also has a name and greet property.

        const user = {
        name: 'Tyler',
        age: 27,
        greet() {
            alert(`Hello, my name is ${this.name}`)
        },
        mother: {
            name: 'Stacey',
            greet() {
            alert(`Hello, my name is ${this.name}`)
            }
        }
        }
        Now the question becomes, what is each invocation below going to alert?

        user.greet()
        user.mother.greet()
        Whenever we’re trying to figure out what the this keyword is referencing we need to look to the invocation and see what’s to the “left of the dot”. In the first invocation, user is to the left of the dot which means this is going to reference user. In the second invocation, mother is to the left of the dot which means this is going to reference mother.

        user.greet() // Tyler
        user.mother.greet() // Stacey
        As mentioned earlier, about 80% of the time there will be an object to the “left of the dot”. That’s why the first step you should take when figuring out what the this keyword is referencing is to “look to the left of the dot”. But, what if there is no dot? This brings us to our next rule -

    Explicit Binding

       Now what if instead of our greet function being a method on the user object, it was just its own standalone function.

        function greet () {
        alert(`Hello, my name is ${this.name}`)
        }

        const user = {
        name: 'Tyler',
        age: 27,
        }
        We know that in order to tell what the this keyword is referencing we first have to look at where the function is being invoked. Now this brings up the question, how can we invoke greet but have it be invoked with the this keyword referencing the user object. We can’t just do user.greet() like we did before because user doesn’t have a greet method. In JavaScript, every function contains a method which allows you to do exactly this and that method is named call.

        “call” is a method on every function that allows you to invoke the function specifying in what context the function will be invoked.

        With that in mind, we can invoke greet in the context of user with the following code -

        greet.call(user)
        Again, call is a property on every function and the first argument you pass to it will be the context in which the function is invoked. In other words, the first argument you pass to call will be what the this keyword inside that function is referencing.

        This is the foundation of rule #2 (Explicit Binding) because we’re explicitly (using .call), specifying what the this keyword is referencing.

        Now let’s modify our greet function just a little bit. What if we also wanted to pass in some arguments? Say along with their name, we also wanted to alert what languages they know. Something like this

        function greet (lang1, lang2, lang3) {
        alert(`Hello, my name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`)
        }
        Now in order to pass arguments to a function being invoked with .call, you pass them in one by one after you specify the first argument which is the context.

        function greet (lang1, lang2, lang3) {
        alert(`Hello, my name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`)
        }

        const user = {
        name: 'Tyler',
        age: 27,
        }

        const languages = ['JavaScript', 'Ruby', 'Python']

        greet.call(user, languages[0], languages[1], languages[2])
        This works and it shows how you can pass arguments to a function being invoked with .call. However, as you may have noticed, it’s a tad annoying to have to pass in the arguments one by one from our languages array. It would be nice if we could just pass in the whole array as the second argument and JavaScript would spread those out for us. Well good news for us, this is exactly what .apply does. .apply is the exact same thing as .call, but instead of passing in arguments one by one, you can pass in an array and it will spread those out for you as parameters in the function.

        So now using .apply, our code can change into this (below) with everything else staying the same.

        const languages = ['JavaScript', 'Ruby', 'Python']

        // greet.call(user, languages[0], languages[1], languages[2])
        greet.apply(user, languages)
        So far under our “Explicit Binding” rule we’ve learned about .call as well as .apply which both allow you to invoke a function, specifying what the this keyword is going to be referencing inside of that function. The last part of this rule is .bind. .bind is the exact same as .call but instead of immediately invoking the function, it’ll return a new function that you can invoke at a later time. So if we look at our code from earlier, using .bind, it’ll look like this

        function greet (lang1, lang2, lang3) {
        alert(`Hello, my name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`)
        }

        const user = {
        name: 'Tyler',
        age: 27,
        }

        const languages = ['JavaScript', 'Ruby', 'Python']

        const newFn = greet.bind(user, languages[0], languages[1], languages[2])
        newFn() // alerts "Hello, my name is Tyler and I know JavaScript, Ruby, and Python" 

    New Binding 
    
       The third rule for figuring out what the this keyword is referencing is called the new binding. If you’re unfamiliar with the new keyword in JavaScript, whenever you invoke a function with the new keyword, under the hood, the JavaScript interpretor will create a brand new object for you and call it this. So, naturally, if a function was called with new, the this keyword is referencing that new object that the interpretor created. 


   Window Binding

        Let’s say we had the following code

        function sayAge () {
        console.log(`My age is ${this.age}`)
        }

        const user = {
        name: 'Tyler',
        age: 27
        }
        As we covered earlier, if you wanted to invoke sayAge in the context of user, you could use .call, .apply, or .bind. What would happen if we didn’t use any of those and instead just invoked sayAge as you normally would

        sayAge() // My age is undefined
        What you’d get is, unsurprisingly, My name is undefined because this.age would be undefined. Here’s where things get crazy though. What’s really happening here is because there’s nothing to the left of the dot, we’re not using .call, .apply, .bind, or the new keyword, JavaScript is defaulting this to reference the window object. What that means is if we add an age property to the window object, then when we invoke our sayAge function again, this.age will no longer be undefined but instead it’ll be whatever the age property is on the window object. Don’t believe me? Run this code,

        window.age = 27

        function sayAge () {
        console.log(`My age is ${this.age}`)
        }
        Pretty gnarly, right? That’s why the 4th rule is the window Binding. If none of the other rules are met, then JavaScript will default the this keyword to reference the window object.

        In strict mode added in ES5, JavaScript will do the right thing and instead of defaulting to the window object will just keep “this” as undefined.

        'use strict'

        window.age = 27

        function sayAge () {
        console.log(`My age is ${this.age}`)
        }

        sayAge() // TypeError: Cannot read property 'age' of undefined


5. Why do we need super() in an extended class?

    Super references the the constructor of the parent class hence allowing the sub class to access the attributes of the parent via the "this" keyword.





Reference: https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/