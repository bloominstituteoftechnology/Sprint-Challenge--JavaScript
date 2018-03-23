# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
Describe some of the differences between .forEach & .map.
    .forEach executes the Function in the array but does not return a value to be utilized again whereas
    .map returns a new Array which you can change, alter or manipulate the new values
==========
Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
    Boolean: True / False
    Number: Numeric Value
    String: Anything beside a numeric value
    Null: When variable points to no object or missing value
    Undefined: When variable has not been assigned a value or the value isn't available for output
    Arrays: Grouped similar indexed values
==========
What is closure? Can you code out a quick example of a closure?
    Function that can access variable outside of it. It can also callback values from within a Function that is nested in it's parent's variables;to give access to the outer function's scope from an inner function.
function Animal(type, sound, color, age) {
    return {
        greet: function() {
            console.log('I am a ' + type + ' ' + 'and I love to ' + sound);
        };
        demo: function() {
            console.log('I am ' + age + ' years old and ' + color + ' color')
        }
    }
}
let animal = new Animal('dog', 'bark', 'black', 8);
animal.greet();
animal.demo();
==========
Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
    Implicit - The object that is left to the dot is a THIS keyword that is being invoked
    
    Explicit - Using the context of what the keyword should be Call, Apply or Bind
        Call - Instead of Method on object, the function is on a Global scope. Calling the function by using .call property when function is no longer nested inside the context
        Apply - Similar to .call but utilized with an Array; combining all the arguments into an Array
        Bind - Similar to .call but instead of output it requires a new function that you can invoke later. Function can be valued as a string, hence it needs new function to .bind the variable
    
    New Binding - A given constructor function will invoke a brand new Object. When the new function is invoked with new keyword, that keyword inside the function is bond to the new Object being constructed.
    
    Window Binding - Referecing a keyword inside the function, it will default to the 'window' keyword object. If Implicit, Explicit, New Binding doesn't apply it will default to Window Object.