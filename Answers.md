#Describe the biggest difference between .forEach & .map.
The biggest difference between .forEach and .map is that .forEach is an array function that does NOT return a new array. It iterates over the selected array, allowing you to mutate it while having the option to receive the element you are currently iterating over, the index of said element, and the array the element came from. The .map array method actually returns a new array. So you could assign a let to an Array.map method, and the returned results would be a completely new array created from your .map method. This is great for keeping your original data immutable.

#What is the difference between a function and a method?
A method is a function that has been declared in an object. For example, you can have a Class or Object that has functions declared inside that you can call. If you have a `const me` assigned to a `new Person` object, and Person has a function inside of it declared as `greet()` you can call that with `me.greet()`. This would actually make it a method. Methods have access to the this keyword, where functions are defined outside of Classes or Objects, also not allowing the use of the this keyword without any binding.
#What is closure?
Closure demonstrates the use of functions inside of other functions, where the scope of said functions depends on where they are placed.
Example Code: 
```javascript
function person(name) {
    let name = name;

    function greet() {
        console.log(`Hi I'm ${name}`);

        function goodBye() {
            console.log(`Goodbye`);
        }

        goodBye();
    }

    greet();
    //goodBye(); We do not have access to this, because goodBye is inside of greet() - We only have direct access to calling greet();
}
```
In this example, inside Person, we can call greet() because we have direct access to it. However, we can not access what is enclosed inside another function inside greet from person due to the scope. But inside greet(), it can call goodBye() because it is a direct parent of it so it has the ability to call it.

#Describe the four rules of the 'this' keyword.
First rule of `this` is window/global binding. This is where `this` will be attatched to the whole window. For example, in a function in a file where it's a direct child of the window, inside of nothing else.

The Second rule of `this` is implicit binding, where a variable is assigned to an object. The `this` keyword in that object is referring to the left side of the assignment. For example:
```javascript
let mike = {
    type: 'Person',
    name: 'Mike',
    greet: function() {
        console.log(`${this.name} says hi!`);
    }
}
```
In this case, mike would be `this` inside of the Person() object. Allowing you to call methods like so `mike.greet()`

The third rule of `this` is considered object instantiation. This is where a variable is assigned to a `new` object/constructor function. This is considered a new copy of the object, where what is assigned to it, is considered `this` inside the objects scope.

The last rule of `this` is explicit binding. Explicit binding is where you can "Explicitly" bind an object to `this`. There are built in prototype functions for this, like .call(), .bind(), and .apply.

#Why do we need super() in an extended class?
We need `super()` in extended classes because it passes parameters to the parent for use.


